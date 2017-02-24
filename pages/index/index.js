Page({
  data:{
    lists:[
      {type:1,name:"新歌榜"},
      {type:2,name:"热歌榜"},
      {type:11,name:"摇滚榜"},
      {type:12,name:"爵士"},
      {type:16,name:"流行"},
      {type:21,name:"欧美金曲榜"},
      {type:22,name:"经典老歌榜"},
      {type:23,name:"情歌对唱榜"},
      {type:24,name:"影视金曲榜"},
      {type:25,name:"网络歌曲榜"}
    ]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  }
})