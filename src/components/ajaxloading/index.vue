<template>
  <div class="ajaxloading">
    <div class="ajaxloadingbg"></div>
    <div class="ajaxloadingicon circleing">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyOUY4OEU3RDVCNzQxMUU5OUEyN0YxRTJBQkM5QTIzNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyOUY4OEU3RTVCNzQxMUU5OUEyN0YxRTJBQkM5QTIzNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI5Rjg4RTdCNUI3NDExRTk5QTI3RjFFMkFCQzlBMjM0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI5Rjg4RTdDNUI3NDExRTk5QTI3RjFFMkFCQzlBMjM0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0c8FSwAABRJJREFUeNrknE9oHFUcx19eKJREvawBt3gIJB4CoSeFEAyGtpSsrAUFCUYiOTZSsFDx6k2hlP65aG8t7aGNqAeJ3VQEA0ljDoLQCjl0S3uwXZuyFGpTFGm331e+U2Y383szs2YyM29/8GHJsjOT35f35/d+7/emq9FoqIRtCOzm5yDoB0VQAL3CNRugDmrgFqiCNXCVn4lZV0KCjIG9/BwBPVt030dgFSyBRZJZQbrBe+ALtoSk7TGogHnwA1tTJgTpAq+CT8BH4GV+t522AubABXAvTUG6KIAR4xB4KQUx/LYAzlKcVLvMAAc821hhHvSEn0Y0nZB4ZkA+Db4GN5IWZAd4H3wMXgPXwVfgW7AM3gi45h+wDv4Ev3PWMDPIfXCX1PnbAmegfo5D/hkqrpnx5ST4KdZVRpAYTIEHjWZ7wO8Nf4Mn4CFYA2fAO6AP7Ij5LI8esAd8Dn5pxLNrYDrO8+L+c8vCg5fp8CQ4Ad4GL7QpgI1uUAanwZ2IotwGs0kJ8pfw0FoCzocxCk6B9Qii3Isqyla1kIUUBPGYABe3SpStGEPq4M0UBTH0giOgGqH7TLcryCvgO3CXLWOKA9wU//a+fxfolAXxKIHLEQba/XEFMQPi9+C/gNlEZZxhcC5ElEtgII4gxzmFBs0mKgfsiiDKsaiCvBUwTqQ5m/yflmLrPg8ZJjRdp1viNBMpfgpeFELvmymvVeLYH4xUpfDd5GJmQJ//y1ZBPgRl4Qb/MkRvqPxYhWsaySbAB1LoXgRXLE3sR7AzR13GPyXb4pQr9H1TlzkARgUlzQLsSy7U8mYbTAlIeZJR+r6py5QtN73A1WxebYE+SFZuFWQclIQfm9TcNyr/NmdJM5aoQZMg3cKPTb7yVwcEWaEvUj64SZAxy43mlTs2H7JT8CxjZrJRvwnpP5Pm38cMtwtmWsLPXmsI2OJ4XTNFJ+VCFx0Sw9u6kPZyjAa7dUi+ckm5ZzafhrRlU2mNu2Su2aqSt0MHNTPcQXaV/co1e0TfgqxfM+0vtRBXTfKtqLnCDbKqw4JIvhW0kksSbjksiORbr7ZcVHNYENE3myB1hwWptyNIR5pNkILDfhfaEaTosCBFmyAbUpDisCCSbxvaMsAMOiyI5FtdW6agIYcFkXyraUuQYksL5Nl66FtgwKYtYaxRccRBQUYsLaSqQxZxYw4KYvNpTYcs88eVnHzOoz1PJktpAa+FrFoEKTkkSMkiyKrXQozZ0mplhwSx+bLkj1QXlZxMtm1x5smatixb7Hny2S9IxRLmTjogyKQlZK+0CmLMtoljSgYmcizG5rKHZpsPWtyZbb4V4QJTVDKj5Oxali2wMMZnTVucfkFMCD8X0uQO5lCQgyFdvnkTvKW4xNSkVyzFJVWWPualWKYUUrtaoc9ijZkpKjlrSQmYYyCHwXAOWsYw/9cBaamvggppBGWPhZQ0nmPpY0eUZSoWtV6KIMpwpxTuKpY/Xwu58eWMjSmJlXZ7TLNgvhEy0B5htZ/Txf8eszxaEWYXeVSjI46HRBVlnYd6RjvhANFshO7j2R0eAyvzWFhujpjFPZU5DT6LGYcskiXmHOLWnPQw7TfGXMZ4jGtNvftRcD7qBe2c293PgKedxJH/hQZVJrhrKkPHVNs9yGyiv1muE7K24NvWg8xBC76ZDKUGMnHUvY+5hskUM2uZeRlCa2btAPOWpW3I1mf2dRlStn5cdfgLVSTL1St3ngowAGZuhX8XzbqqAAAAAElFTkSuQmCC"
        style="display:blcok"
      >
    </div>
    <div class="loadingtxt">数据上传中，请稍等..</div>
  </div>
</template>
<script>
export default {
  name: 'aloading',
  props:
    {
      loading: true
    },
  created() {

  }
}
</script>
<style lang='stylus' scoped>
.ajaxloading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;

  .ajaxloadingbg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    z-index: 1001;
  }

  .ajaxloadingicon {
    position: absolute;
    width: 68px;
    height: 68px;
    top: 600px;
    left: 360px;
    z-index: 1002;
  }

  .loadingtxt {
    width: 100%;
    height: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #ffffff;
    font-size: 25px;
    margin-top: 750px;
  }
}

.circleing {
  opacity: 0.6;
  animation: loadingani 1s infinite;
}

@keyframes loadingani {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
</style>
