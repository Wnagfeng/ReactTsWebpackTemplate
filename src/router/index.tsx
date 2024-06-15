import { RouteObject, Navigate } from 'react-router-dom'
import React, { lazy } from 'react'
import PageA from '@/views/PageA/index'
const PageB = lazy(() => import('@/views/PageB/index')) //懒加载页面(使用懒加载需要使用Suspense组件包裹)[要么在App(App.tsx中的第16行)组件包裹，要么在index组件中全部包裹]
const FatherPage = lazy(() => import('@/views/FatherPage/index'))
const ChildrenPageA = lazy(
  () => import('@/views/FatherPage/c-view/childrenPageA/index')
)
const ChildrenPageB = lazy(
  () => import('@/views/FatherPage/c-view/childrenPageB/index')
)
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/pageA" />
  },
  {
    path: '/pageA',
    element: <PageA />
  },
  {
    path: '/pageB',
    element: <PageB />
  },
  {
    path: '/fatherPage',
    element: <FatherPage />,
    children: [
      {
        path: '/fatherPage',
        element: <Navigate to="/fatherPage/childrenPageA" />
      },
      {
        path: 'childrenPageA',
        element: <ChildrenPageA />
      },
      {
        path: 'childrenPageB',
        element: <ChildrenPageB />
      }
    ]
  }
]

export default routes
