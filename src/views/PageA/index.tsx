import React, { FC, memo } from 'react'

import {
  useAppSelector,
  useAppDispatch,
  useAppshallowEqual
} from '@/store/index'

import {
  changeMessageAction,
  incrementAction,
  decrementAction
} from '@/store/modules/Counter'
interface IProps {
  children?: React.ReactNode
}
const PageA: FC<IProps> = (props) => {
  const { count, message } = useAppSelector((state) => {
    return {
      count: state.counter.count,
      message: state.counter.message
    }
  }, useAppshallowEqual)
  const dispatch = useAppDispatch()
  function handleIncrement() {
    dispatch(incrementAction())
  }
  function handleDecrement() {
    dispatch(decrementAction())
  }
  function handleChangeName() {
    dispatch(changeMessageAction('CoderJoon'))
  }

  return (
    <div className="pageAWrapper">
      PageA{count},{message}
      <div className="ctrlsWrapper">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleChangeName}>Chanegname</button>
      </div>
    </div>
  )
}

export default memo(PageA)
