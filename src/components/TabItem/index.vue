<template>
  <Base v-bind="allProps" @click="handleClick">
    <slot v-bind="{ active: isActive }" />
  </Base>
</template>

<script lang="ts">
import cs from 'classnames'
import { computed, defineComponent, inject } from 'vue'
import Base from '../Base/index.vue'
import { TabState } from '@/hooks/useTab'

export default defineComponent({
  props: {
    as: {
      type: String,
      default: 'div'
    },
    class: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    }
  },
  components: { Base },
  setup (props, { attrs }) {
    const state = inject<TabState | null>('tab-state', null)
    const isActive = computed(() => {
      return state && state.active === props.name
    })

    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        as: props.as,
        class: cs('v-tab-item', props.class, {
          active: isActive.value
        })
      }

      return p
    })

    function handleClick () {
      if (state) {
        state.select(props.name)
      }
    }

    return { allProps, handleClick }
  }
})
</script>

<style></style>
