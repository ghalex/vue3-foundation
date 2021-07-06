<template>
  <Base
    v-bind="allProps"
    class="v-textarea"
    :value="modelValue"
    @input="handleChange"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Base from '@/components/Base/index.vue'

export default defineComponent({
  name: 'Textarea',
  props: {
    as: {
      type: String,
      default: 'textarea'
    },
    modelValue: {
      type: String,
      required: false
    }
  },
  components: { Base },
  setup (props, { attrs, emit }) {
    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        as: props.as,
        role: 'textbox',
        'aria-multiline': true,
        type: props.as === 'textarea' ? 'text' : undefined,
        contenteditable: props.as === 'textarea' ? undefined : true,
        style: {
          minWidth: '150px',
          textAlign: 'left'
        }
      }

      return p
    })

    function handleChange (e: any) {
      emit('update:modelValue', e.target.value)
    }
    return { allProps, handleChange }
  }
})
</script>

<style></style>
