import Service from '_ser/service'
import aloading from './components/ajaxloading/index.vue'
import {
  bridge,
  showError,
  wxConfig,
  encrypt,
  KV,
  isApple,
  wxShare
} from '_util/index'
import CryptoJS from 'crypto-js'

export default {
  name: 'App',
  data() {
    return {
      kun: true,
      isaloading: false,
      dialogConfigs: {
        tipDialog: {

        }
      }
    }
  },
  async created() {
    bridge.addEventListener('showAjaxloading', this.showAjaxloading, this)
    bridge.addEventListener('hideAjaxloading', this.hideAjaxloading, this)
    try {
      const param = {
        url: window.location.split('#')[0]
      }
      let result = await Service.wxConfig(param)
      console.log('result2222', result)
      if (result && result.data.appId) {
        await wxConfig(result.data)
        const shareOptions = {
          title: '全新兰蔻「小黑瓶」肌底精华，首批体验者使用效果排行榜出炉，功效大升级！',
          link: 'https://campaign.lancome.com.cn/xiaoheping/ba2019/#/rank',
          imgUrl: 'https://campaign.lancome.com.cn/xiaoheping/ba2019/share.jpeg',
          desc: '全新兰蔻「小黑瓶」肌底精华，首批体验者使用效果排行榜出炉，功效大升级！'
        }
        wxShare(...shareOptions)
      }
    } catch (err) {
      showError(this)
    }
  },
  mounted() {},

  computed: {
    // ...mapGetters('contants', {
    //   unionId: 'unionId'
    // })
  },

  components: {
    aloading
  },

  methods: {
    showAjaxloading(e) {
      this.isaloading = true
    },
    hideAjaxloading(e) {
      this.isaloading = false
    }
  }
}
