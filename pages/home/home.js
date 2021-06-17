// pages/home/home.js
import Service from "../../model/service"
import Category from "../../model/category"
const service = new Service()

Page({

  /**
   * Page initial data
   */
  data: {
    tabs:['全部','在找','提供'],
    currentTabIndex:0,
    categoryList:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
//excute 1
//excute 2
//...
    this._getCategoryList()
    this._getServiceList()
  },
  async _getServiceList(){
    const serviceList=await service.getServiceList(1,10)
    this.setData({
      serviceList:serviceList.data,
    })
    console.log(serviceList)
  },
  async _getCategoryList(){
    const categoryList=await Category.getCategoryListWithAll()
    this.setData({
      categoryList,
    })

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

  },
  onPullDownRefresh:function(){
   console.log("pulldown refresh")
  },
  onReachBottom:function(){
    console.log("reach bottom")
  }
})