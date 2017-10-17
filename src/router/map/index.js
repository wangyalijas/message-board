//不同功能模块的路由代码应该分离

import authRoutes from './auth.js'
import Index from '@/views/'

export default [
  {
    path: '/',
    component: Index
  },
  authRoutes
]

