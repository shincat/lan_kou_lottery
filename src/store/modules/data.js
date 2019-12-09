/*
 * @Author: godkun(github)
 * @LastEditors: godkun(github)
 * @Description: 实验性的页面
 * @Date: 2019-05-01 14:51:07
 * @LastEditTime: 2019-05-14 21:47:03
 */

import data from '../../data'

const state = {
  lotteryData: data,
  lotteryDataCur: {}
}

const mutations = {
  setLotteryDataCur(state, result) {
    state.lotteryDataCur = result
  }
}

// 触发行为
const actions = {
}

const getters = {
  lotteryData(state) {
    return state.lotteryData
  },

  lotteryDataCur(state) {
    return state.lotteryDataCur
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
