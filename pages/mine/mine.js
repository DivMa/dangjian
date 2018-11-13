var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  mine: function () {
    wx.navigateTo({
      url: '../other/other'
    })
  },
  develop: function () {
    wx.navigateTo({
      url: '../develop/develop'
    })
  },
  document: function () {
    wx.navigateTo({
      url: '../document/document'
    })
  },
  relation: function () {
    wx.navigateTo({
      url: '../relation/relation'
    })
  },
  onLoad: function () {

    var that = this
    wx.getUserInfo({
      success: function (res) {
        // console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      }
    })
  }
})