import { mapGetters } from 'vuex'

export default {
  name: 'Info',
  computed: {
    ...mapGetters('data', {
      lotteryData: 'lotteryData',
      lotteryDataCur: 'lotteryDataCur'
    }),
  },
  created() {
    console.log('this.lotteryDataCur', this.lotteryDataCur.gyxm)
  },
  methods: {
    submit() {
      this.$router.push('../lottery')
    }
  }
}
