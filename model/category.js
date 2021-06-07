import Http from "../utils/http"


class Category{
  static async getCategoryList(){
    return Http.request("v1/category")
  }
  static async getCategoryListWithAll(){
     const categoryList=await this.getCategoryList()
     categoryList.unshift({id:0,name:'全部'})
     return categoryList
  }
}
export default Category