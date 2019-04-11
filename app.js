import {LoginModel} from "models/login.js"
const loginModel = new LoginModel()
App({
  onLaunch(options) {
    
    loginModel.login()
    .then(res => {
      return loginModel.decrypt(res)
    })
    .then(res => {
      console.log(res)
    })

  }

})