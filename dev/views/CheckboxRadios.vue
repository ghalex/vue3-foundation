<template>
  <div>
    <div class="p-8 text-center">
      <h1 class="title mb-2">Checkboxes</h1>
      <div class="border flex items-center justify-center p-2">
        <v-checkbox as="vButton" class="small" v-slot="{ checked }">
          {{ checked ? 'Checked' : 'Not Checked' }}
        </v-checkbox>
        <v-checkbox v-model="agree" class="ml-4">Agree</v-checkbox>
        <v-checkbox v-model="agree" class="ml-4 primary">Label Here</v-checkbox>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Checkobx',
  components: {},
  setup () {
    const agree = ref(true)

    return { agree }
  }
})
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
}
</style>
