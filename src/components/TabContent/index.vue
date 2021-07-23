<template>
  <div class="v-tab-content" v-if="isActive">
    <slot />
  </div>
</template>

<script lang="ts">
import { TabState } from '@/hooks/useTab'
import { computed, defineComponent, inject } from '@vue/runtime-core'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const state = inject<TabState | null>('tab-state', null)
    const isActive = computed(() => {
      return state && state.active === props.name
    })

    return { isActive }
  }
})
</script>

<style></style>
