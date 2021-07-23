<template>
  <div class="p-8 text-center">
    <h1 class="title mb-2">Tabs</h1>
    <div class="border p-2">
      <v-tab :state="state">
        <div class="flex">
          <v-tab-item name="item1">Item 1</v-tab-item>
          <v-tab-item name="item2">Item 2</v-tab-item>
          <v-tab-item name="item3">Item 3</v-tab-item>
        </div>
        <div>
          <v-tab-content name="item1">Content 1</v-tab-content>
          <v-tab-content name="item2">Content 2</v-tab-content>
          <v-tab-content name="item3">Content 3</v-tab-content>
        </div>
      </v-tab>
    </div>
    <div class="border p-2 mt-4">
      <v-tab class="w-full horizontal" :state="state">
        <div>
          <v-tab-item name="item1">General</v-tab-item>
          <v-tab-item name="item2">Settigs</v-tab-item>
          <v-tab-item name="item3">User profile</v-tab-item>
        </div>
        <div class="flex-1">
          <v-tab-content name="item1">Content 1</v-tab-content>
          <v-tab-content name="item2">Content 2</v-tab-content>
          <v-tab-content name="item3">Content 3</v-tab-content>
        </div>
      </v-tab>
    </div>
  </div>
</template>

<script lang="ts">
import { useTab } from '@/index'
import { defineComponent } from 'vue'

export default defineComponent({
  setup (): { state: any } {
    const state = useTab('item1')

    return { state }
  }
})
</script>

<style scoped></style>
