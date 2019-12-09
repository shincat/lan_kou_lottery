<template>
  <div id="app">
    <keep-alive>
      <transition name="page">
        <router-view/>
      </transition>
    </keep-alive>
    <!-- <aloading v-if="isaloading"></aloading> -->
  </div>
</template>
<script src='./app.js'>
</script>

<style lang="stylus">
.logo
  // position: absolute;
  width: 296px;
  height: 72px;
  margin-top: 300px;
  // top: 300px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('../../assets/images/lottery/logo.png');
.sprite-enter-active, .sprite-leave-active
  transition  all .3s

.sprite-enter, .sprite-leave-to
  opacity  0

.page-enter-active, .page-leave-active
  transition  all .5s
.page-enter, .page-leave-to
  transform translate(0,500px)
  opacity  0
</style>
