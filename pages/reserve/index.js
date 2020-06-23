// pages/reserve/index.js
Page({
  options: {
    addGlobalClass: true,
  },
  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: '../../images/sw1.jpg'
    }, {
      id: 1,
      type: 'image',
      url: '../../images/sw2.jpg',
    }],
    elements: [{
      id: 0,
      title: '医社保',
      name: '办理',
      color: 'green',
      icon: 'newsfill'
    },{
      id: 1,
      title: '护照通行证',
      name: '办理',
      color: 'blue',
      icon: 'newsfill'
    },
    {
      id: 2,
      title: '房产证',
      name: '办理',
      color: 'brown',
      icon: 'newsfill'
    },
    {
      id: 3,
      title: '水电煤气',
      name: '办理',
      color: 'red',
      icon: 'newsfill'
    }]
  },
  handleClick({ buttonId }){
    
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
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