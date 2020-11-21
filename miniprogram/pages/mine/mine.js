
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
  }
})