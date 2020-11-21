
wx-Page({
  data:{
    userInfo:{},
    user_note:"点击登录",
  },
  //用户授权登录
  auth :function(e){
    const{userInfo} = e.detail;
		wx.setStorageSync("userInfo",userInfo);
    this.setData(
      {
        userInfo: e.detail.userInfo,
        user_note: e.detail.userInfo.nickName
      }
    )
    console.log(e.detail.userInfo);
  },

  //点击跳转词库选择一个界面
  changeLexicon:function(){
    wx.navigateTo({
      url: '../lexicon/lexicon',
    })
  },

  //点击跳转打卡界面
  clockIN:function(){
    wx.navigateTo({
      url: '../sign_in3/sign_in3',
    })
  },
  //设置轮播图格式
  data: {
    //默认设置第一张选中
    currentIndex: 0,
    imagesArr:
    [
      '../images/dogInWater.jpg',
      '../images/flowerInWater.jpg',
      '../images/lay.png',
      '../images/mirror.png',
      '../images/pinkSea.jpg',
      '../images/rain.png',
      '../images/sea.jpg',
      '../images/shadow.jpg'
    ]
    },
    /* 这里实现控制中间凸显图片的样式 */
    handleChange: function(e) {
    this.setData({
      //e.detail.current就是当前swipper-item的id
    currentIndex: e.detail.current
    })
    }, 
})
