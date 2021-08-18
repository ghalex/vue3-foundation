<template>
  <div>
    <div class="p-8 text-center">
      <h1 class="title mb-2">Checkboxes</h1>
      <div class="border flex items-center justify-center p-2 bg-gray-300">
        <v-checkbox as="vButton" class="small" v-slot="{ checked }">
          {{ checked ? 'Checked' : 'Not Checked' }}
        </v-checkbox>
        <v-checkbox disabled v-model="agree" class="ml-4">
          Agree
        </v-checkbox>
        <v-checkbox v-model="agree" class="ml-4 primary">Label Here</v-checkbox>
      </div>
    </div>
    <div class="p-8 text-center">
      <h1 class="title mb-2">Checkboxes</h1>
      <div class="border flex items-center justify-center p-2 bg-gray-300">
        <v-radio :disabled="true" value="apple" v-model="fruite" class="ml-4"
          >Apple</v-radio
        >
        <v-radio value="pear" v-model="fruite" class="ml-4 primary">
          Pear
        </v-radio>
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
    const fruite = ref('apple')

    return { agree, fruite }
  }
})
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
}
</style>
