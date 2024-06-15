import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/Counter'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'
type GetstateFunType = typeof store.getState //我们可以发现他的返回值类型就是我们需要的类型
type IRootState = ReturnType<GetstateFunType> //这样我们就获取到了他的返回值类型
type AppDispatch = typeof store.dispatch
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector //TypedUseSelectorHook是react-redux提供的类型定义，我们可以用它来获取到store的状态
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppshallowEqual = shallowEqual
export default store
