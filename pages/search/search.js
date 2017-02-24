// pages/search/search.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  focus:function(){
    this.setData({
      val: ""
    })
  },
  blur:function(e){
    var value=e.detail.value
    this.setData({
      val: value
    })
  },
  search:function(){
    var self=this
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?size='+this.data.size+'&format=json&method=baidu.ting.search.catalogSug&query='+this.data.val,
      header: {
        'Content-Type': 'json;charset=UTF-8;'
      },
      success:function(res){
        console.log(res.data)
        self.setData({
          audios: res.data.song
        })
      }
    })
  }
})