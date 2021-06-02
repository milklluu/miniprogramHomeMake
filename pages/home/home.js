// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    tabs:['全部','在找','提供'],
    currentTabIndex:0,
    categoryList:[
      
      {
        "id":1,
        "name":"保洁"
      },
      {
        "id":2,
        "name":"汽修"
      },
      {
        "id":3,
        "name":"疏浚"
      }
    ]

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },
  handleTabChange:function(event){

  },
  handleCategoryChange:function(event){
    const id=event.currentTarget.dataset.id;
    
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})