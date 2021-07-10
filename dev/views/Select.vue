<template>
  <div class="p-8 text-center">
    <h1 class="title mb-2">Selects</h1>
    <div class="border p-2">
      <v-select
        v-model="val"
        :options="[
          { value: 'first', label: 'First name' },
          { value: 'last', label: 'Last name' },
          { value: 'initial', label: 'Middle Initial' },
          { value: 'maiden', label: 'Maiden name', disabled: true }
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  setup () {
    const val = ref('last')

    watch(val, () => console.log(val.value))
    return { val }
  }
})
</script>

<style scoped></style>
