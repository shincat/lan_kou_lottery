/* 微信分享的方法;
 * @param {String}  title     分享标题;
 * @param {String}  link      分享链接;(location.href)
 * @param {String}  imgUrl    分享图标;(取后台字段, 没有返回时默认取第一张图片)
 * @param {String}  desc      分享描述;(取后台字段, 没有返回时采用产品定义的描述文案)
 * @return {Object} success   确认分享后执行的回调;
 * @return {Object} cancel    取消分享后执行的回调;
 */
export function wxShare(title, link, imgUrl, desc) {
  wx.ready(function() {
    // 自定义“分享到朋友圈”
    wx.onMenuShareTimeline({
      title: title,
      link: link,
      imgUrl: imgUrl,
      success: function() {},
      cancel: function() {}
    })
    // 自定义“分享到QQ空间”
    wx.onMenuShareQZone({
      title: title,
      desc: desc,
      link: link,
      imgUrl: imgUrl,
      success: function() {},
      cancel: function() {}
    })
    // 自定义“分享给微信好友”
    wx.onMenuShareAppMessage({
      title: title,
      desc: desc,
      link: link,
      imgUrl: imgUrl,
      success: function() {},
      cancel: function() {}
    })
    // 自定义分享给QQ好友”
    wx.onMenuShareQQ({
      title: title,
      desc: desc,
      link: link,
      imgUrl: imgUrl,
      success: function() {},
      cancel: function() {}
    })
  })
}
