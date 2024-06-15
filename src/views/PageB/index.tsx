import React, { FC, memo } from 'react'

interface IProps {
  children?: React.ReactNode
}
const PageB: FC<IProps> = (props) => {
  return <div>PageB</div>
}

export default memo(PageB)
