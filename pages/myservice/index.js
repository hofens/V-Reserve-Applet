// pages/reserve/service/service.js

const { $Toast } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceId: 0,
    serviceName: '加载中',
    IDcard: '3501232020',
    phone: 12345678910,
    reserveTakeTime: '2020-6-9 13:23:01',
    reservedNum: 0,
    residualNum: 0,
    serialNumber: 202006050027,

    time: '12:00',
    date: '2020-06-17',
  },
  formSubmit: function (e) {
    var that = this; 
    console.log(e.detail.value)
    wx.request({ 
      url: getApp().globalData.url+'/order/insertOne',
      data:{
        'idcard': e.detail.value.IDcard,
        'phone': e.detail.value.phone,
        'serviceId': that.data.serviceId,
        'reserveTakeTime': that.data.date+' '+that.data.time+':00'
      },  
      method: 'POST',  
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res) {  
        console.log('submit success'); 
        if(res.data.code == '100'){
          $Toast({
            content: '余量不足',
            type: 'warning'
          });
        }else{
          $Toast({
            content: '预约编号: '+res.data.data.serialNum,
            type: 'success'
          });
        }
        
        if (getCurrentPages().length != 0) {
          //刷新当前页面的数据
          getCurrentPages()[getCurrentPages().length - 1].onLoad()
        }
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
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.serviceId)
    console.log(options)
    
    this.setData({
      serviceId: options.id
    })
    console.log(this.data.serviceId)
    const that = this
    wx.request({ 
      url: getApp().globalData.url+'/business/selectOne/',  
      data:{
        'serviceId': that.data.serviceId
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