// pages/record/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList:{
      serialNum:0,
      idcard:0,
      reserveTakeTime:0,
    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)

    const that = this
    wx.request({ 
      url: getApp().globalData.url+'/order/selectAll',  
      method: 'GET',  
      data:{

      },
      header: {
        'content-type': 'application/json'
      },
      success:function(res) { 
        console.log('submit success'); 
        console.log(res.data)
        that.setData({
          orderList: res.data.data
        })
        console.log(that.data.orderList)
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
    if (getCurrentPages().length != 0) {
      //刷新当前页面的数据
      getCurrentPages()[getCurrentPages().length - 1].onLoad()
    }
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