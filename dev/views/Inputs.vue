<template>
  <div class="p-8 text-center">
    <div class="border p-2">
      <div>
        <label class="form-label">Name:</label>
        <v-input v-model="name" placeholder="ex. John Doe" />
      </div>
      <div class="mt-2">
        <label class="form-label">Email:</label>
        <v-input
          disabled
          placeholder="ex. email@gmail.com"
          value="hello@email.com"
        />
      </div>

      <div class="mt-2">
        <label class="form-label">Phone:</label>
        <v-input class="primary" placeholder="ex. +40 (743) 152 161" />
      </div>

      <div class="mt-2">
        <label class="form-label">Error:</label>
        <v-input class="danger" placeholder="ex. Opps!" />
      </div>
    </div>
    <div class="border p-2">
      <h1>Your name is:</h1>
      <b>{{ name }}</b>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const name = ref('Alex')
    return { name }
  }
})
</script>

<style></style>
