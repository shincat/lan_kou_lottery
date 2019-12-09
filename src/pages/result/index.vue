<template>
  <div class="main-view flex">
    <div class="logo"></div>
    <div class="home-title">
      <div class="name">
        {{lotteryDataCur.gyxm}}
        {{lotteryDataCur.prizeTitle}}
      </div>
      <div class="tip">
        恭喜你！
      </div>
      <div class="money">
        <img :style="moneyImg" :src="require(`../../assets/images/lottery/money/${money}.png`)" alt="">
      </div>
    </div>
    <!-- <img class="bgHelp" src="../../assets/images/lottery/bgHelp.png" alt=""> -->
  </div>
</template>
<script src='./index.js'></script>
<style lang="stylus" scoped>
@import './index.styl';
</style>
