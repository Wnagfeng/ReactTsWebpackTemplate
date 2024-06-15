import React, { FC, memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
interface IProps {
  children?: React.ReactNode
}
const FatherPage: FC<IProps> = (props) => {
  return (
    <div className="FatherPageWrapper">
      这里是父页面
      <Suspense fallback={<div>loading...</div>}>
        <Outlet></Outlet>
      </Suspense>
      {/* 路由占位符 */}
    </div>
  )
}

export default memo(FatherPage)
