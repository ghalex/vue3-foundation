<template>
  <div class="home">
    <h1 class="title">Home Page</h1>
    <v-button>Click Me</v-button>
    <v-input />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {}
})
</script>

<style lang="scss" scoped>
.title {
  color: red;
}
</style>
