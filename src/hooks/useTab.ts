import { reactive } from 'vue'

export interface TabState {
  active: string | null
  select: (item: string) => void
}

export default (initialItem: string): TabState => {
  const state = reactive({
    active: initialItem,
    select (item: string) {
      state.active = item
    }
  })

  return state
}
