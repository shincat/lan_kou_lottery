/*
 * @Author: godkun(github)
 * @LastEditors: godkun(github)
 * @Description: 基础
 * @Date: 2019-03-31 09:10:22
 * @LastEditTime: 2019-06-23 00:11:19
 */

// 从 .env.prd 中取到 baseUrl
const VUE_APP_BASE_URL = process.env.VUE_APP_BASE_URL
// const VUE_APP_BASE_URL = 'https://wx.sephora.cn/h5/shuday201905/'
// console.log('VUE_APP_BASE_URL', VUE_APP_BASE_URL)
class StateService {
  constructor() {
    this.baseURL = VUE_APP_BASE_URL
  }

  config(config) {
    this.baseURL = config.baseURL
  }

  getConfig() {
    return {
      baseURL: this.baseURL
    }
  }

  getBaseURL() {
    return this.baseURL
  }
}

export default new StateService()
