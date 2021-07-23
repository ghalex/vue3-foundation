<template>
  <div v-bind="allProps">
    <slot />
  </div>
</template>

<script lang="ts">
import cs from 'classnames'
import { computed, defineComponent, provide, ref } from 'vue'

export default defineComponent({
  props: {
    class: {
      type: String,
      required: false
    },
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props, { attrs }) {
    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        class: cs('v-tab', props.class)
      }

      return p
    })

    provide('tab-state', ref(props.state))

    return { allProps }
  }
})
</script>

<style></style>
