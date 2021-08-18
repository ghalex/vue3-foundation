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
          :disabled="true"
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
      <div class="mt-2 flex justify-center">
        <label class="form-label">Phone:</label>
        <v-textarea rows="5">Some text</v-textarea>
      </div>
    </div>
    <div class="border p-2 mt-2 flex justify-center items-center">
      <h1 class="mr-2">Upload your file:</h1>
      <div class="w-250">
        <v-file v-model="file" class="primary w-full" :loading="false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, watch } from 'vue'

export default defineComponent({
  setup () {
    const name = ref('Alex')
    const file = ref(null)

    watch(file, () => {
      console.log(file.value)
    })
    return { name, file }
  }
})
</script>

<style>
.w-250 {
  width: 350px;
}
</style>
