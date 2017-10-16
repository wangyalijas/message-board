//不同功能模块的路由代码应该分离

import authRoutes from './auth.js'
import login from '@/auth/login'
export default {
  '/': {
    name: 'Login',
    component: login
  }
}
