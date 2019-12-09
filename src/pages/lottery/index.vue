<template>
  <div class="main-view flex">
    <div class="logo"></div>
    <div class="home-title">
      <div class="value">用手指来回滑动</div>
      <div class="value">刮开属于你的幸福福利</div>
    </div>
    <div class="canvas-wrap" @touchmove="touchMove">
      <div :class="card">
        <canvas id="canvas" width="750" height="280"></canvas>
      </div>
    </div>
    <div v-show="isShow" class="pointer">
      <img src="./pointer.png" alt="">
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style lang="stylus" scoped>
@import './index.styl';
</style>
