import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface initialStateType {
  name: string
  count: number
  message: string
}

const initialState: initialStateType = {
  count: 100,
  name: 'Joon',
  message: 'hello'
}
const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    },
    incrementAction(state) {
      state.count += 1
    },
    decrementAction(state) {
      state.count -= 1
    }
  }
})

export default counterSlice.reducer
export const { changeMessageAction, incrementAction, decrementAction } =
  counterSlice.actions
