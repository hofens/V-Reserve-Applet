// pages/reserve/service/service.js

const { $Toast } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceName: 'hello',
    IDcard: 12816386,
    phone: 121313,
    reservedNum: 0,
    residualNum: 0,
    serialNumber: 202006050027,
  },
  formSubmit: function (e) {
    var that = this; 
    console.log(e.detail.value)

    wx.request({ 
        
      url: getApp().globalData.url+'addUser',  
      data:{
        'IDcard': e.detail.value.IDcard,
        'phone': e.detail.value.phone,
        'reserveTime': e.detail.value.reserveTime
      },  
      method: 'POST',  
      header: {
        'content-type': 'application/json'
      },
      success:function(res) {  
        console.log('submit success'); 
        $Toast({
          content: res.code,
          type: 'success'
      });  
      },  
      fail:function(res){  
          console.log('submit fail');
          $Toast({
            content: '输入不能为空',
            type: 'warning'
        });
      }  
    }) 
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.request({ 
      url: getApp().globalData.url+'/business/selectOne/',  
      data:{
        'serviceId': 1
      },  
      method: 'GET',  
      header: {
        'content-type': 'application/json'
      },
      success:function(res) { 
        console.log('submit success'); 
        that.setData({
          serviceName: res.data.serviceName,
          reservedNum: res.data.reserveNum,
          residualNum: res.data.residualNum
        })
        
        console.log(that.data.serviceName)
      },  
      fail:function(res){  
          console.log('submit fail');
          $Toast({
            content: '输入不能为空',
            type: 'warning'
        });
      }  
    })
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