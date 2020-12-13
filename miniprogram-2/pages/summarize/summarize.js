// pages/summarize/summarize.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:true
  },
  /*
  *打卡
  */
  toastShow: function(event) {
    console.log("触发了点击事件，弹出toast")
    let status = false
    this.setData({status:status})　　　　//setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
  },
  toastHide:function(event){
    console.log("触发bindchange，隐藏toast")
    let status =true
    this.setData({status:status})
  },
  /*
   * 再来一组
   */
  repeat(){
    wx.redirectTo({
      url: '../remember/cet4/cet4',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})