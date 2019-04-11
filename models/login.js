import {
  config
} from "../config.js"
import {
  HTTP
} from "../utils/util.js"

class LoginModel extends HTTP {

  login() {

    return new Promise((resolve, reject) => {
      wx.login({
        success: (res) => {
          if (res.code) {
            resolve(res.code)

          } else {
            reject()
          }
        }
      })

    })
    
    

  }

  decrypt(code) {
    return this.request({
      url: `?appid=${config.appId}&secret=${config.appSecret}&js_code=${code}&grant_type=authorization_code`
    })
  }

  getUserInfo() {

    wx.checkSession({
      success() {
        // session_key 未过期，并且在本生命周期一直有效
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        wx.login() // 重新登录
      }
    })

    wx.getUserInfo({

    })
  }


}

export {
  LoginModel
}