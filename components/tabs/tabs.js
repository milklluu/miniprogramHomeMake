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
      if(index=== this.data.currentTabIndex){
        return
      }
      this.setData({
        currentTabIndex:index
      })

      this.triggerEvent('change', {index})
    },
    handleTouchMove:function(event){
      const direction=event.direction
      const currentTabIndex=this.data.currentTabIndex
      const targetTabIndex=currentTabIndex+direction
      if(targetTabIndex<0 || targetTabIndex>this.data.tabs.length-1)
      {
        return
      }
      const customEvent={
        currentTarget:{
          dataset:{
            index:targetTabIndex
          }
        }
      }
      this.handleTabChange(customEvent)
      //console.log(event)
    }

  }
})
