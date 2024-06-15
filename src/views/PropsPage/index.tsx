import React, { memo } from 'react'

interface IProps {
  children?: React.ReactNode
  name: string
  age: number
  height: number
}
import { PropsPageWrapper } from './style'
const PropsPage: React.FC<IProps> = (props) => {
  return (
    <PropsPageWrapper>
      <p>PropsPage</p>
      <p>姓名：{props.name}</p>
      <p>年龄：{props.age}</p>
      <p>身高：{props.height}</p>
      <div>{props.children}</div>
    </PropsPageWrapper>
  )
}

export default memo(PropsPage)
