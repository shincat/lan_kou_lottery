/*
 * @Author: godkun(github)
 * @LastEditors: godkun(github)
 * @Description: 东西不对，一个 Service 搞定
 * @Date: 2019-04-03 09:39:22
 * @LastEditTime: 2019-06-25 21:35:58
 */

import ApiService from './apiService'
import Mock from '../../mock/mock'

class Service {
  // @Mock.wxConfig
  static async wxConfig(param) {
    return ApiService.post(`/jsapi/wxapi.php`, param)
  }

  // @Mock.laBa
  static async laBa(params = {}) {
    return ApiService.post(`/api/ba2019`, params)
  }

  // @Mock.getShopList
  static async getShopList(params = {}) {
    return ApiService.post(`/api/ba2019`, params)
  }
}

export default Service
