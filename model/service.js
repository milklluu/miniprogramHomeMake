import Http from "../utils/http"
class Service{
  //@param page 
  //@param count
  //@param category_id
  //@type
  async getServiceList(page,count,category_id=null,type=null){
    const data={
      page,
      count
    }
    return await Http.request("v1/service/list",data)
  }
}
export default Service