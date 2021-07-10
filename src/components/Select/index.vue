<template>
  <Base v-bind="allProps" :value="modelValue" @input="handleChange">
    <slot>
      <option v-for="o in allOptions" :key="o.value" v-bind="o">
        {{ o.label }}
      </option>
    </slot>
  </Base>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Base from '@/components/Base/index.vue'

export default defineComponent({
  name: 'Input',
  props: {
    as: {
      type: String,
      default: 'select'
    },
    options: {
      type: Array,
      default: () => []
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
        class: 'v-select',
        role: 'listbox',
        style: {}
      }

      return p
    })
    const allOptions = computed(() => {
      return props.options.map(o => {
        if (typeof o === 'string') {
          return { label: o, value: o }
        }

        return o
      })
    })

    function handleChange (e: any) {
      emit('update:modelValue', e.target.value)
    }

    return { allProps, allOptions, handleChange }
  }
})
</script>

<style></style>
