
Page({
  data:{
    userInfo:{},
    user_note:"点击登录"
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
  
  jumpPage1:function(){
    wx.navigateTo({
      url: '星球页面',
    })
  },

  jumpPage2:function(){
    wx.navigateTo({
      url: '生词本页面',
    })
  },

  jumpPage3:function(){
    wx.navigateTo({
      url: '/pages/suggest/suggest.wxml',
    })
  },

  jumpPage4:function(){
    wx.navigateTo({
      url: '/pages/guide/guide.wxml',
    })
  }
})
