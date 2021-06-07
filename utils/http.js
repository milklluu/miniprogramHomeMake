import APIConfig from "../config/api"
import exceptionMessage from"../config/exception-message"
import wxToPromise from "./wx"
class Http{
  static async request(url,data,method="Get"){
    const res= await wxToPromise('request',{ url: APIConfig.baseUrl +url,
      data,
      method})
    //return res.then((res)=>{
          // todo request success
      if(res.statusCode<400){
        return res.data.data
      }
      //todo request fail
      if(res.statusCode==401){
        //token exception
        return
      }
      this._showError(res.data.error_code,res.data.message)
    //})
    // const res= await wx.request({
    //   url: APIConfig.baseUrl +url,
    //   data,
    //   method,
    //   success:(res)=>{       
    //     // todo request success
    //     if(res.statusCode<400){
    //       return res.data.data
    //     }
    //     //todo request fail
    //     if(res.statusCode==401){
    //       //token exception
    //       return
    //     }
    //     this._showError(res.data.error_code,res.data.message)
    //   }
    // })
  }
  static _showError(errorCode,message){
   
    let title=""
    const errormessage=exceptionMessage[errorCode]
    title=errormessage || message || '未知异常'
    title= typeof title==='object'?Object.values(title).join(';'):title
    wx.showToast({
      title,
      icon:'none',
      duration:3000
    })

  }
}
export default Http
