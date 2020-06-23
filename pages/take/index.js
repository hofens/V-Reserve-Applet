// pages/take/index.js
const { $Toast } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData : 0,  /* 当前选中的选项卡 */
    items: [
      {value: '0', name: '医社保办理'},
      {value: '1', name: '护照通行证办理'},
      {value: '2', name: '房产证办理'},
      {value: '3', name: '水电煤气业务办理'}
    ],
    choosedService: '',
    IDcard: ''
  },

  bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current,
      choosedService: ''
    })
  },
  checkCurrent:function(e){
    const that = this;
 
    if (that.data.currentData === e.target.dataset.current){
        return false;
    }else{
 
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    const choosedService = e.detail.value
    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }
    this.setData({
      items,
      choosedService: choosedService
    })
  },
  formSubmit: function (e) {
    var that = this; 
    console.log(this.data.choosedService)
    console.log(this.data.IDcard)

    wx.request({ 
        
      url: getApp().globalData.url+'/order/selectByOrder',  
      data:{
        'takeType': this.data.currentData,
        'idcard': e.detail.value.IDcard,
        // 'idcard':'12816386',
        'serviceId': this.data.choosedService
      },  
      method: 'POST',  
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res) {  
        console.log('submit success'); 
        if(res.data.code == '101'){
          $Toast({
            content: res.data.msg,
            type: 'warning'
          });
        }else{
          $Toast({
            content: '预约编号: '+res.data.data.serialNum,
            type: 'success'
          });
        }
      },  
      fail:function(res){  
          console.log('submit fail');
          $Toast({
            content: '无法取号',
            type: 'warning'
        });
      }  
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