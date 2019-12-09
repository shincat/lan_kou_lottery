<template>
  <div class="main-view flex">
    <div class="logo"></div>
    <div class="top" v-if="lotteryDataCur.leibie === 'BA'">
      <div class="row">
        <div class="key">姓 名：</div>
        <div class="value">{{lotteryDataCur.gyxm}}</div>
      </div>
      <div class="row">
        <div class="key">柜 台：</div>
        <div class="value">{{lotteryDataCur.gtmc}}</div>
      </div>
      <div class="row">
         <div class="key">员工号：</div>
        <div class="value">{{lotteryDataCur.zzgybh}}</div>
      </div>
    </div>
    <div class="top" v-else>
      <div class="row bk-row">
        <div class="key">百库 | {{lotteryDataCur.gyxm}}</div>
      </div>
    </div>
    <div class="footer">
      <div class="btn" @click="submit">开 始 抽 奖</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style lang="stylus" scoped>
@import './index.styl';
</style>
