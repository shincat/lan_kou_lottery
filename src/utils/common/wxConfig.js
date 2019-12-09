export default function wxConfig(res) {
  return new Promise(async(resolve, reject) => {
    wx.config({
      debug: true, // 开启调试模式,
      appId: res.AppId, // 必填，企业号的唯一标识，此处填写企业号corpid
      timestamp: res.Timestamp, // 必填，生成签名的时间戳
      nonceStr: res.NonceStr, // 必填，生成签名的随机串
      signature: res.Signature, // 必填，签名，见附录1
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone'
      ]
    })
  })
}
