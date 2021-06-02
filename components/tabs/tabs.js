// components/tabs/tabs.js
Component({
  options:{
    multipleSlots:true  
  },
  /**
   * Component properties
   */
  properties: {
    "tabs":{
      type:Array,
      value:[]
    }
  },

  /**
   * Component initial data
   */
  data: {
    currentTabIndex:0
  },

  /**
   * Component methods
   */
  methods: {
    handleTabChange:function(event){
  
      const index=event.currentTarget.dataset.index
      this.setData({
        currentTabIndex:index
      })

      this.triggerEvent('change', {index})
    },
    handleTouchMove:function(event){
      console.log(event)
    }

  }
})
