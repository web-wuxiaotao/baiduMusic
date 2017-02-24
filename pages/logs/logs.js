Page({
  data:{
    size: 60,
    musics: ''
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
   this.setData({
     type:options.type
   })
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    this.http()
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数

  },
  http:function(){
    var self=this
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?size='+this.data.size+'&type='+this.data.type+'&format=json&method=baidu.ting.billboard.billList',
      success:function(res){
        console.log(res.data.song_list)
        self.setData({
          musics:res.data.song_list
        })
      }
    })
  }
})
