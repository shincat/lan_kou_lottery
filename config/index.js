/*
 * @Author: godkun(github)
 * @LastEditors: godkun(github)
 * @Description: 动态插入环境配置
 * @Date: 2019-03-26 17:33:56
 * @LastEditTime: 2019-04-19 01:08:48
 */

const devConfig = {
  host: JSON.stringify('127.0.0.1')
}

const prdConfig = {
  // 静态资源路径的设置
  host: JSON.stringify('')
}

module.exports = {
  dev: {
    env: {
      TYPE: JSON.stringify('dev'),
      ...devConfig
    }
  },
  prd: {
    env: {
      TYPE: JSON.stringify('prd'),
      ...prdConfig
    }
  }
}
