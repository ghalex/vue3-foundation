<template>
  <div>
    <div class="p-8 text-center">
      <h1 class="title mb-2">Buttons</h1>
      <div class="border p-2">
        <v-button :disabled="false">Click Me</v-button>
        <v-button disabled class="primary ml-2">Click Me</v-button>
        <v-button class="loading ml-2">Click Me</v-button>
        <v-button class="primary loading ml-2">Click Me</v-button>
      </div>
    </div>

    <div class="p-8 text-center">
      <h1 class="title mb-2">Buttons Size</h1>
      <div class="flex justify-center items-center border p-2">
        <v-button class="small">Click Me</v-button>
        <v-button class="ml-2">Click Me</v-button>
        <v-button class="large ml-2">Click Me</v-button>
        <v-button class="x-large ml-2">Click Me</v-button>
      </div>
    </div>

    <div class="p-8 text-center">
      <h1 class="title mb-2">Buttons with Icons</h1>
      <div class="flex items-center justify-center border p-2">
        <v-button class="icon">
          <span class="material-icons">
            favorite
          </span>
        </v-button>
        <v-button class="primary icon x-large round ml-2">
          <span class="material-icons">
            home
          </span>
        </v-button>
        <v-button class="loading icon ml-2"
          ><span class="material-icons">
            home
          </span></v-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {}
})
</script>

<style lang="scss" scoped></style>
