// pages/show/show.js
Page({
  data:{
    start:'0:00',
    plays: false,
    play: '../image/play2.png',
    alt: '',
    info: '',
    file_duration: '',
    percent:'0',
    lrclink:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      id:options.id
    })
  },
  onReady:function(){
    // 页面渲染完成
    this.http();
    this.audioCtx = wx.createAudioContext('myAudio');
    this.lry()
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
    var self=this;
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?songid='+this.data.id+'&format=json&method=baidu.ting.song.play',
      success:function(res){
        console.log(res.data)
        self.setData({
          alt: res.data.bitrate,
          info: res.data.songinfo,
          file_duration: self.format(res.data.bitrate.file_duration)
        })
      }
    })
  },
  play:function(e){
    if(this.data.plays == false){
      this.audioCtx.play()
      this.setData({
        play: '../image/pause2.png',
        plays: true
      })
    }else if(this.data.plays == true){
      this.audioCtx.pause()
      this.setData({
        play: '../image/play2.png',
        plays: false
      })
    }
  },
  time:function(e){
    this.setData({
      start:this.format(e.detail.currentTime),
      percent: e.detail.currentTime/e.detail.duration*100
    })
  },
  format:function(v){
    v=Math.floor (v);
    var s = v % 60;
    s=(s<10)?("0"+s):s;
    var m=Math.floor(v/60);
    return m + ":" + s;
  },
  lry:function(){
    var self=this;
    wx.request({
      url:'http://tingapi.ting.baidu.com/v1/restserver/ting?songid='+this.data.id+'&format=json&method=baidu.ting.song.lry',
      success:function(res){
        self.setData({
          lrclink: res.data
        })
      }
    })
  }
})