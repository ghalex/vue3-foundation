<template>
  <Base v-if="as" v-bind="allProps" :as="as" @click="handleClick">
    <slot v-bind="{ checked: isChecked }" />
  </Base>
  <div v-bind="allProps" @click="handleClick" v-else>
    <input type="checkbox" :checked="isChecked" />
    <label><slot /></label>
  </div>
</template>

<script lang="ts">
import classnames from 'classnames'
import { computed, ref, defineComponent, watch } from 'vue'
import Base from '../Base/index.vue'

export default defineComponent({
  name: 'Checkbox',
  props: {
    as: {
      type: String,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false
    },
    class: {
      type: String,
      required: false
    }
  },
  components: { Base },
  setup (props, { emit, attrs }) {
    const isChecked = ref(props.modelValue)
    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        role: 'checkbox',
        ariaChecked: isChecked.value,
        checked: isChecked.value,
<<<<<<< HEAD
        class: props.as ? props.class : classnames('v-checkbox', props.class)
=======
        class: props.as ? props.class : classnames('z-checkbox', props.class),
        style: {
          pointerEvents: attrs.disabled !== undefined ? 'none' : undefined
        }
>>>>>>> 4eb7d9350285369b0e43bc08af3f33fca4ad9819
      }

      return p
    })

    function handleClick () {
      // if (attrs.disabled === undefined) {
      // if (props.as !== 'input') {
      isChecked.value = !isChecked.value
      emit('update:modelValue', isChecked.value)
      emit('change', isChecked.value)
      // }
    }

    // function handleChange (e: Event) {
    //   e.stopImmediatePropagation()
    //   e.preventDefault()

    //   isChecked.value = !isChecked.value

    //   emit('update:modelValue', isChecked.value)
    //   // emit('change', isChecked.value)
    // }

    watch(
      () => props.modelValue,
      () => {
        isChecked.value = props.modelValue
      }
    )

    return { isChecked, allProps, handleClick }
  }
})
</script>

<style></style>
