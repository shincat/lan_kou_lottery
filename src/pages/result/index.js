import { mapGetters } from 'vuex'
export default {
  name: 'Result',
  computed: {
    ...mapGetters('data', {
      lotteryData: 'lotteryData',
      lotteryDataCur: 'lotteryDataCur'
    })
  },
  data() {
    return {
      money: 0,
      moneyImg: {}
    }
  },
  created () {
    const item = this.lotteryDataCur.prize
    const map = new Map()
    map.set('一等奖', 3000)
    map.set('二等奖', 2000)
    map.set('三等奖', 1000)
    map.set('四等奖', 500)
    map.set('五等奖', 300)
    map.set('幸福奖', 100)
    this.money = map.get(item)
    let obj = {
      '100': [282, 122],
      '300': [281, 136],
      '500': [301, 122],
      '1000': [352, 122],
      '2000': [375, 107],
      '3000': [354, 136]
    }
    let arr = obj[this.money]
    this.moneyImg = {
      width: arr[0]/2 + 'px',
      height: arr[1]/2 + 'px'
    }
  },
  methods: {
    close() {
      this.dialogConfigs.tipDialog.visible = false
    }
  }
}
