import BasicController from './BasicController'

class AuthController extends BasicController {
  login() {
    return this.noContent();
  }
}

export default new AuthController();
