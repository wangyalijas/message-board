import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Login from '@/views/auth/Login'

// import routesMap from './map/'  //路由映射

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})

// router.map(routesMap)

export default router
