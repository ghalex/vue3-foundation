<template>
  <Teleport to="#teleport">
    <div v-if="state.isOpen" v-bind="allProps" @click="onClick"><slot /></div>
  </Teleport>
</template>

<script lang="ts">
import cs from 'classnames'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'DialogBackdrop',
  props: {
    class: {
      type: String,
      required: false
    },
    style: {
      type: Object,
      default: () => ({})
    },
    state: {
      type: Object
    }
  },
  setup (props, { attrs }) {
    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        ariaModal: true,
        class: cs('v-dialog-backdrop', props.class),
        style: {
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          ...props.style
        }
      }

      return p
    })

    function onClick () {
      if (props.state) props.state.close()
    }

    return { allProps, onClick }
  }
})
</script>

<style></style>
