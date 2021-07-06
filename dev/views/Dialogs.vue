<template>
  <div class="p-8 text-center">
    <h1 class="title mb-2">Dialogs</h1>
    <div class="border p-2">
      <v-dialog-disclosure :state="dlg1">Open dialog</v-dialog-disclosure>
      <v-dialog :state="dlg1">
        <h2 class="border-b-2 border-gray-500 px-2 py-2">
          Hy! this is a dialog
        </h2>
        <div class="p-8">
          <v-button @click="dlg1.close">Click to close</v-button>
        </div>
      </v-dialog>
      <v-dialog-backdrop class="bg-gray-200 opacity-30" :state="dlg1" />
    </div>
  </div>
</template>

<script lang="ts">
import { useDialog } from '@/index'
import { defineComponent } from 'vue'

export default defineComponent({
  setup (): { dlg1: any } {
    const dlg1 = useDialog()

    return { dlg1 }
  }
})
</script>

<style scoped></style>
