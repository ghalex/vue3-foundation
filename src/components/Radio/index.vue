<template>
  <Base v-if="as" v-bind="allProps" :as="as" @click="handleClick">
    <slot v-bind="{ checked: isChecked }" />
  </Base>
  <div v-else v-bind="allProps" @click="handleClick">
    <input type="radio" :checked="isChecked" />
    <label><slot /></label>
  </div>
</template>

<script lang="ts">
import classnames from 'classnames'
import { computed, defineComponent } from 'vue'
import Base from '../Base/index.vue'

export default defineComponent({
  name: 'Radio',
  props: {
    as: {
      type: String,
      default: null
    },
    value: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: false
    },
    class: {
      type: String,
      required: false
    }
  },
  components: { Base },
  setup (props, { emit, attrs }) {
    const isChecked = computed(() => {
      return props.value === props.modelValue
    })

    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        role: 'radio',
        checked: isChecked.value,
        ariaChecked: isChecked.value,
        class: props.as ? props.class : classnames('z-radio', props.class)
      }

      return p
    })

    function handleClick () {
      emit('update:modelValue', props.value)
    }

    return { isChecked, allProps, handleClick }
  }
})
</script>

<style></style>
