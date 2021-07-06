import { reactive } from 'vue'

interface DialogState {
  isOpen: boolean
  events: any
  data: any
  open: () => void
  close: () => void
}

export default (): DialogState => {
  const state = reactive({
    isOpen: false,
    data: null,
    events: {
      click: () => {
        console.log('click here')
        state.isOpen = !state.isOpen
      }
    },
    open: (data?: any) => {
      if (data) {
        state.data = data
      }
      state.isOpen = true
    },
    close: () => {
      state.data = null
      state.isOpen = false
    }
  })

  return state
}
