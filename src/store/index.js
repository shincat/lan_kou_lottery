/*
 * @Author: godkun(github)
 * @LastEditors: godkun(github)
 * @Description:
 * Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：
 * 应用层级的状态应该集中到单个 store 对象中。
 * 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
 * 异步逻辑都应该封装到 action 里面。
 * @Date: 2019-04-01 18:14:28
 * @LastEditTime: 2019-05-11 02:50:57
 */

import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import createVuexAlong from 'vuex-along'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules,
  plugins: [
    createVuexAlong({
      name: 'lottery', // 设置保存的集合名字，避免同站点下的多项目数据冲突
      // local: {
      //   list: ['makeup'],
      //   isFilter: true // 过滤模块 ma 数据， 将其他的存入 localStorage
      // },
      // session: {
      //   list: ['makeup', 'makeup-try']
      // }
    })
  ],
  strict: debug
})
