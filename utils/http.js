import { config } from '../config.js'

class HTTP {

  request({ url, data = {}, method = 'GET' }) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }

  _request(url, resolve, reject, data = {}, method = 'GET') {
    
    wx.request({
      url: (url.startsWith("?") ? config.decrypt_base_url : config.api_base_url) + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
        // 'appkey': config.appkey
      },
      success: res => resolve(res.data),
      fail: err => reject()
    })

  }

}

export { HTTP }


















