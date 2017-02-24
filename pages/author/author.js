// pages/author/author.js
Page({
  data:{
    box:'',
    audios:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      id:options.tinguid
    })
  },
  onReady:function(){
    // 页面渲染完成
    this.http()
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
  http:function(){
    var self=this
    wx.request({
      url:'http://tingapi.ting.baidu.com/v1/restserver/ting?tinguid='+this.data.id+'&format=json&method=baidu.ting.artist.getInfo',
      success:function(res){
        console.log(res.data) 
        self.setData({
          box: res.data
        })
      }
    });
    wx.request({
      url:'http://tingapi.ting.baidu.com/v1/restserver/ting?tinguid='+this.data.id+'&format=json&method=baidu.ting.artist.getSongList&limits=1000,use_cluster=1&order=2',
      success:function(res){
        console.log(res.data.songlist)
        self.setData({
          audios: res.data.songlist
        })
      }
    })
  }
})