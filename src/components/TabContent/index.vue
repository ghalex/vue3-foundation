<template>
  <div class="v-tab-content" v-if="isActive">
    <slot />
  </div>
</template>

<script lang="ts">
import { TabState } from '@/hooks/useTab'
import { computed, defineComponent, inject, Ref, ref } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const state = inject<Ref<TabState | null>>('tab-state', ref(null))
    const isActive = computed(() => {
      return state.value && state.value.active === props.name
    })

    return { isActive }
  }
})
</script>

<style></style>
