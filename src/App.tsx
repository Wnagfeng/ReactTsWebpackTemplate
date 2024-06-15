import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/index'
import Navbar from '@/components/Navbar/index'
import Loading from './views/Loading'
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* 由于使用了懒加载，所以需要使用Suspense组件进行包裹 */}
      <Suspense fallback={<Loading />}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
