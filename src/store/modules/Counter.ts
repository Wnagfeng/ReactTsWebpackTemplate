import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
interface IPersonlist {
  id: number
  name: string
  age: number
}
interface initialStateType {
  name: string
  count: number
  message: string
  Personlist: IPersonlist[]
}

const initialState: initialStateType = {
  count: 100,
  name: 'Joon',
  message: 'hello',
  Personlist: []
}
// 异步action
export const FetchChangePersonlist = createAsyncThunk(
  'counter/fetchChangePersonlist',
  (payload, { dispatch }) => {
    // 在这里发起请求，获取数据
    // getxxx().then((res) => {
    //   dispatch(xxxxAction(res.data))
    // })
    setInterval(() => {
      dispatch(
        changepersonlistAction([
          { id: 1, name: '张三', age: 25 },
          { id: 3, name: '王五', age: 28 }
        ])
      )
    }, 1000)
  }
)
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
    },
    changepersonlistAction(state, { payload }) {
      state.Personlist = payload
    }
  }
})

export default counterSlice.reducer
export const {
  changeMessageAction,
  incrementAction,
  decrementAction,
  changepersonlistAction
} = counterSlice.actions
