import React, { Suspense } from 'react'
import name from '@/Comp'
import { useRoutes } from 'react-router-dom'

import routes from '@/router/index'
import PropsPage from './views/PropsPage'
import Loading from './views/Loading'
function App() {
  return (
    <div className="App">
      <header className="App-header">作者：{name}</header>
      <PropsPage name="Joon" age={21} height={175}>
        <p>This is a props page children</p>
        This is a props page children
      </PropsPage>
      {/* 由于使用了懒加载，所以需要使用Suspense组件进行包裹 */}
      <Suspense fallback={<Loading />}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
