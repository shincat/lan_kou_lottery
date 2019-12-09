import { mapGetters } from 'vuex'
import ScratchCard from './scratchcard.js'
export default {
  name: 'Lottery',
  data() {
    return {
      isShow: true
    }
  },
  computed: {
    ...mapGetters('data', {
      lotteryData: 'lotteryData',
      lotteryDataCur: 'lotteryDataCur'
    }),
    card () {
      const item = this.lotteryDataCur.prize
      if (!item) return ['card']
      const map = new Map()
      map.set('一等奖', 'prize1')
      map.set('二等奖', 'prize2')
      map.set('三等奖', 'prize3')
      map.set('四等奖', 'prize4')
      map.set('五等奖', 'prize5')
      map.set('幸福奖', 'prize6')
      let classId = map.get(item)
      if (classId) return ['card', classId]
      else return ['card']
    }
  },
  mounted () {
    let that = this
    window.addEventListener('touchmove', function (e) {
      e.preventDefault()
    }, { passive: false })
    new ScratchCard({
    	canvas: document.getElementById('canvas'),
      coverImg: require('./coverImg.png'),
      pixelRatio: 2,
      doneCallback: function () {
        setTimeout(() => {
          that.$router.push('../result')
        }, 2000)
      }
    })
  },
  methods: {
    touchMove() {
      this.isShow = false
    }
  }
}