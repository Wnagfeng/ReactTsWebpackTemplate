import React, { FC, memo, useEffect, useState } from 'react'

import {
  useAppSelector,
  useAppDispatch,
  useAppshallowEqual
} from '@/store/index'

import {
  changeMessageAction,
  incrementAction,
  decrementAction,
  FetchChangePersonlist
} from '@/store/modules/Counter'
import joonRequest from '@/service/index'
import './index.less'
import { PageAWrapper } from './style'

interface IProps {
  children?: React.ReactNode
}
const PageA: FC<IProps> = (props) => {
  const { count, message, personlistdata } = useAppSelector((state) => {
    return {
      count: state.counter.count,
      message: state.counter.message,
      personlistdata: state.counter.Personlist
    }
  }, useAppshallowEqual)
  const [data, setData] = useState<number>(0)
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

  function handelChangeData() {
    setData(data + 1)
  }
  function handelfetchgetperosonlistdata() {
    dispatch(FetchChangePersonlist())
  }
  useEffect(() => {
    // dispatch(FetchChangePersonlist())
  }, [])

  return (
    <PageAWrapper className="pageAWrapper">
      <div className="state">
        <p>这里是Redux的数据</p>
        <p>Count: {count}</p>
        <p>Message: {message}</p>
      </div>
      <div className="state">
        <p>这里是useState的数据</p>
        <p>data: {data}</p>
        <button onClick={handelChangeData}>修改data</button>
      </div>
      <div className="ctrl">
        <p>这里是Redux的控制</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleChangeName}>Chanegname</button>
      </div>
      <hr />
      <div className="axios">
        <p>模拟Axios网络请求</p>
        <button onClick={handelfetchgetperosonlistdata}>
          发起请求修改Personlist
        </button>
        <p>
          Personlist数据:
          {personlistdata.map((item) => {
            return <p key={item.id}>{item.name}</p>
          })}
        </p>
      </div>
    </PageAWrapper>
  )
}

export default memo(PageA)
