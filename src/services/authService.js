import xhr from './xhr'

/**
 *用户认证所用到的API
 */
class AuthService {
  /*检测当前用户是否已经登录*/
  checkLogin() {
    console.log(xhr);
  }

  login(userData) {
    return Service.post({
      url: '/auth/login',
      data: userData
    })
  }
}

// 实例化后导出，全局单例
export default new AuthService()
