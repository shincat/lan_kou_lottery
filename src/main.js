/*
 * @Author: godkun(github)
 * @LastEditors: godkun(github)
 * @Description: Vue 解析主入口
 * @Date: 2019-04-05 10:01:43
 * @LastEditTime: 2019-06-29 12:10:08
 */

import Vue from 'vue'
// import './components'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch'
import "amfe-flexible/index.js"
import store from './store/index'

Vue.use(VueTouch, { name: 'v-touch' })

// 阻止 vue 在启动时生成生产提示。
// Vue.config.productionTip = false
// // 生产环境不加载 VConsole
if (process.env.NODE_ENV == 'production') {
  //let VConsole = require('vconsole/dist/vconsole.min.js')
  //const vConsole = new VConsole() // eslint-disable-line
  ///Vue.config.performance = true
}

// 干掉所有的console.log()
// console.log = () => void 0

// Vue.use(Loading)
// 统一进行异常处理
// Vue.config.errorHandler = function(err, vm, info) {
//   let {
//     message, // 异常信息
//     name, // 异常名称
//     stack // 异常堆栈信息
//   } = err
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
