import APIConfig from "../config/api"
class Http{
  static request(url,data,method="Get"){
    wx.request({
      url: APIConfig.baseUrl +url,
      data,
      method,
      success:(res)=>{
        console.log(res)
        // todo request success
        if(res.statusCode<400){
          return res.data.data
        }
        //todo request fail
        if(res.statusCode==401){
          //token exception
          return
        }

      }
    })
  }
  static sayhi(){
    console.log("hi")
  }
}
export default Http
