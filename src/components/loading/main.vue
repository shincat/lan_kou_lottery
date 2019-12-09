<template>
  <div class="loading-box">
    <div class="loading-mask"></div>
    <div class="loading-content">
      <div calss='wrap'>
        <!-- <div class="text">兰蔻微生态新星球</div> -->
        <div
          :class="isAndroid ? 'pageloaidngicon' : 'pageloaidngicon1' "
          class=" icon1">
       
        </div>
        <div
          :class="isAndroid ? 'pageloaidngicon' : 'pageloaidngicon1' "
          class=" icon2" :style="iconstyle">
         
        </div>
        <div class="text">{{percent}}%</div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'pageloading',
  props: {
    show: Boolean,
    text: {
      type: String,
      default: ''
    }

  },
  data() {
    return {
      isAndroid: false,
      percent: 100,
      iconstyle: {
        width: '299px'
      }
    }
  },
  watch: {

  },

  created() {
    this.isApple()
  },
  methods: {

  isApple() {
    const u = navigator.userAgent
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
    this.isAndroid = isAndroid
  },

    setPercent() {
      let that = this
      let val = 0
      let timer = setInterval(() => {
        ++val
        that.percent = val
        let a = parseInt(val) / 100
        let w = 299 * a
        that.iconstyle.width = w + 'px'
        if (val === 100) {
          clearInterval(timer)
          that.finish()
        }
      }, 20)
    },
    finish() {
      this.$emit('finish')
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
