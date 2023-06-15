import { environment } from "../../environments/environment";


export const ApiBaseUrl = environment.api_url; // "https://localhost:44315";
// export const SwitchUiDomainUrl = environment.switchUI_domainUrl;
export const
  ApiEndPoint = {
    //customer 
    GetCustomerList:"/api/Main/getcustomerlist",
    AddupdateCustomer:'/api/Main/addupdatecustomer',
    GetCustomer:'/api/Main/getcustomer',
    GetCustomerDDL:'/api/Main/addupdatecustomerDll',
    DeleteCustomer:'/api/Main/deletecustomer',

    //product
    GetProductList:"/api/Main/getproductlist",
    AddupdateProduct:'/api/Main/addupdateproduct',
    GetProduct:'/api/Main/getproduct',
    GetProductDDL:'/api/Main/addupdateproductDll',
    DeleteProduct:'/api/Main/deleteproduct',

    

  }