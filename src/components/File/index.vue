<template>
  <div class="v-file">
    <input
      :id="id"
      type="file"
      name="file"
      ref="fileRef"
      @change="handleNewFile()"
    />

    <div class="v-file__label">
      <span v-if="file">{{ file.name }}</span>
      <span class="v-file__placeholder" v-else>No file</span>
    </div>
    <v-button
      class="v-file__button primary"
      as="label"
      :for="id"
      :class="{ loading }"
      >Choose File</v-button
    >
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import vButton from '@/components/Button/index.vue'

export default defineComponent({
  name: 'File',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Object,
      default: null
    }
  },
  components: { vButton },
  setup (props, { emit }) {
    const id = Date.now()
    const file = ref(props.modelValue)
    const fileRef: any = ref(null)

    function handleNewFile () {
      file.value = fileRef.value?.files[0]

      emit('update:modelValue', file.value)
      emit('file', file.value)
    }

    return { id, file, fileRef, handleNewFile }
  }
})
</script>

<style></style>
