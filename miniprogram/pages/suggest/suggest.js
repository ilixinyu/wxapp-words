const app = getApp();
Page({

  data: {
    textVal:'',//文本
  },

    // 文本域的输入事件
    handleTextInput(e){
      this.setData({
        textVal:e.detail.value
      })
    },

    //提交按钮
    gotoAudit(){
       // 验证合法性
      if(!textVal.trim()){
        // 不合法
        wx.showToast({
          title: '输入不合法',
          icon: 'none',
          mask: true,
        });
        return;
      }

　　//这里封装过request请求
    let url = app.globalData.URL + 'api接口';
    let data ={
      intro:this.data.textVal   //文本内容返回给后台
    }

    app.wxRequest('POST', url, data, (res) => {
      console.log(res);
      if (res.code==1) {
        wx.showModal({
          title: '提示',
          content: '提交成功，请耐心等待审核',
          showCancel: false,
          confirmText: '确定',
          confirmColor: '#ED8137',
          success: (result) => {
            if(result.confirm){
              console.log("提交任务成功");
              wx.switchTab({
                url: '/pages/my/my'  //提交成功后跳转页面
              })
            }
          },
        });
        
      }else{
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
        
      }
    }, (err) => {
      console.log(err)
    })      
    },

})