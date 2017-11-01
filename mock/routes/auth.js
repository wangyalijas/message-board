import AuthController from '../controllers/AuthController'

const routes = [
  {
    path: '/auth/login',
    method: 'POST',
    controller: AuthController,
    action: 'login'
  }
];

export default routes;
