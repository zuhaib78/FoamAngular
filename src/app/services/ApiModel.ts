import { environment } from "../../environments/environment";


export const ApiBaseUrl = environment['api_url'];

export const
  ApiEndPoint = {
  //customer 
    GetCustomerList:"/api/Main/getcustomerlist",
    AddupdateCustomer:'/api/Main/addupdatecustomer',
    DeleteCustomer:'/api/Main/deletecustomer',
    GetCustomerById:'/api/Main/getcustomer',

    //product
    GetProductList:"/api/Main/getproductlist",
    AddupdateProduct:'/api/Main/addupdateproduct',
    GetProduct:'/api/Main/getproductbyid',
    DeleteProduct:'/api/Main/deleteproduct',


    GetInvoicetList:"/api/Main/getinvoicelist",
    AddupdateInvoice:'/api/Main/addupdateinvoice',
    GetInvoice:'/api/Main/getinvoicebyid',
    DeleteInvoice:'/api/Main/deleteinvoice',


    

    

  }