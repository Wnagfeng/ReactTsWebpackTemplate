import React, { FC, memo } from 'react'

interface IProps {
  children?: React.ReactNode
}
const ChildrenPageA: FC<IProps> = (props) => {
  return <div>ChildrenPageA</div>
}

export default memo(ChildrenPageA)
