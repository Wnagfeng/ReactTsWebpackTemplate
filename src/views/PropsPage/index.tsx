import React, { memo } from 'react'

interface IProps {
  children?: React.ReactNode
  name: string
  age: number
  height: number
}
const PropsPage: React.FC<IProps> = (props) => {
  return (
    <div>
      <h1>PropsPage--PropsPage接收的信息如下：</h1>
      <p>姓名：{props.name}</p>
      <p>年龄：{props.age}</p>
      <p>身高：{props.height}</p>
      <div>{props.children}</div>
    </div>
  )
}

export default memo(PropsPage)
