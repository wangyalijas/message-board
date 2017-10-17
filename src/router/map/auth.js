const Login = resolve => require(['@/views/auth/login.vue'], resolve)
export default [
  {
    'name': 'auth/login',
    'path': '/auth/login',
    component: Login
  }
]
