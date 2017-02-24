# 微信小程序开发案例  百度音乐

## api
* 基础api：http://tingapi.ting.baidu.com/v1/restserver/ting
* 获取歌曲列表：size=''&type=''&format=json&method=baidu.ting.billboard.billList
* 歌曲播放：songid=''&format=json&method=baidu.ting.song.play
* 歌手信息：tinguid=''&format=json&method=baidu.ting.artist.getInfo
* 歌手作品：tinguid=''&format=json&method=baidu.ting.artist.getSongList&limits='',use_cluster=1&order=2
* 搜索：size=''&format=json&method=baidu.ting.search.catalogSug&query=''(query：搜索字段)
  * size: 获取歌曲数量
  * type: 榜单类型
    * type:1----新歌榜
    * type:2----热歌榜
    * type:11----摇滚榜
    * type:12----爵士
    * type:16----流行
    * type:21----欧美金曲榜
    * type:22----经典老歌榜
    * type:23----情歌对唱榜
    * type:24----影视金曲榜
    * type:25----网络歌曲榜
    
    
### 关于api其它具体内容可访问
  * http://www.cnblogs.com/liuying1995/p/5704176.html


## 结构规划

* index  入口
* search   搜索
* log   歌单
* show   歌曲播放
* author   歌手信息

## 开发

* 进度条及时间
          <!--wxml-->
          
          <view class="start">{{start}}</view>
          <view class="end">{{file_duration}}</view>
          <progress class="progress" percent="{{percent}}"></progress>
          
          
          /**wxss/
          .progress{
              width: 100%;
              height: 6px;
              background: #dddddd;
              position: absolute;
              top: -3px;
              left: 0;
          }

          .start{
              font-size: 24rpx;
              position: absolute;
              top: -18px;
              left: 20rpx;
              color: #333;
          }
          .end{
              font-size: 24rpx;
              position: absolute;
              top: -18px;
              right: 20rpx;
              color: #333;
          }
          
          
          //js
          
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
          }
          
          
          歌曲总时长直接在返回数据中获取，利用format函数进行处理
          
          
          
## 在开发中，没有对歌词及切歌进行处理，以后继续完善。
