import React, { FC, memo } from 'react'

interface IProps {
  children?: React.ReactNode
}
const Loading: FC<IProps> = (props) => {
  return <div>这里是Loading组件</div>
}

export default memo(Loading)
