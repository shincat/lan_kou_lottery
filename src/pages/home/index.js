import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      phone: ''
    }
  },
  mounted () {
    window.addEventListener('resize', () => {        
      if (document.activeElement.tagName == 'INPUT') {                      
        window.setTimeout(() => { document.activeElement.scrollIntoViewIfNeeded();            
        }, 100);
      } 
    })
  },
  computed: {
    ...mapGetters('data', {
      lotteryData: 'lotteryData',
      lotteryDataCur: 'lotteryDataCur'
    }),
  },
  methods: {
    submit() {
      this.lotteryData.forEach((item, index) => {
        let id = (item.id + '' || '').replace(/\s*/g,"")
        if (this.phone == id) {
          this.$store.commit('data/setLotteryDataCur', item)
          this.$router.push('../info')
        }
        return
      })
    }
  }
}
