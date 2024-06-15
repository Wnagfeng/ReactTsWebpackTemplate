import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IPerson {
  children?: ReactNode
}

const ChildrenPageB: FC<IPerson> = () => {
  return <div>ChildrenPageB</div>
}

export default memo(ChildrenPageB)
