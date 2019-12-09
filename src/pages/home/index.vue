<template>
  <div class="main-view flex">
    <div class="logo"></div>
    <div class="home-title">
      <img src="../../assets/images/lottery/title.png" alt>
    </div>
    <div class="top">2020兰蔻全国美容顾问大会</div>
    <div class="user-info">
      <div class="input-box">
        <input type="number" v-model="phone" maxlength="11" placeholder="请输入手机号">
      </div>
    </div>
    <div class="footer">
      <div class="btn" @click="submit">
          登 录
        </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style lang="stylus" scoped>
@import './index.styl';
</style>
