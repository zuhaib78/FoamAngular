import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CustomerDto } from '../Models/CustomerDto';
import {ApiBaseUrl} from "./ApiModel";
import {ApiEndPoint} from './ApiModel';
import {ProductDTO} from '../Models/ProductDTO'

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  CustomerData:any[]=[];
  ProductData:any[]=[];
  
constructor(private httpClient:HttpClient){
  
 }
 //Customer calls
 SaveCustomerData(model:CustomerDto):Promise<any>
  {
    return this.httpClient.post(ApiBaseUrl+ApiEndPoint.AddupdateCustomer,model).toPromise();    
  }  

  GetCustomerList(): Promise<any> {
   let url = ApiBaseUrl+ ApiEndPoint.GetCustomerList;
    return this.httpClient.get(url).toPromise();
  }

  DeleteCustomer(id: number): Promise<any> {
  const baseUrl = ApiBaseUrl+ApiEndPoint.DeleteCustomer;
  return this.httpClient.delete(baseUrl+ '?id=' + id).toPromise();
}

GetCustomerById(id:number):Promise<any>{
let url = ApiBaseUrl+ApiEndPoint.GetCustomerById;
return this.httpClient.get(url+ '?id=' + id).toPromise();
}


//Products Call


AddupdateProduct(model:ProductDTO): Promise<any>{
   return this.httpClient.post(ApiBaseUrl+ApiEndPoint.AddupdateProduct,model).toPromise();
}

GetProductList(): Promise<any>{
  return this.httpClient.get(ApiBaseUrl+ApiEndPoint.GetProductList).toPromise();
}

GetProductById(id:number):Promise<any>{
  return this.httpClient.get(ApiBaseUrl+ApiEndPoint.GetProduct + '?id='+ id).toPromise();
}

DeleteProduct(id:number): Promise<any> {
return this.httpClient.delete(ApiBaseUrl+ApiEndPoint.DeleteProduct + '?id='+ id).toPromise();
}



//invoice 

AddupdateInvoice(model:ProductDTO): Promise<any>{
  return this.httpClient.post(ApiBaseUrl+ApiEndPoint.AddupdateInvoice,model).toPromise();
}

GetInvoice(): Promise<any>{
 return this.httpClient.get(ApiBaseUrl+ApiEndPoint.GetInvoicetList).toPromise();
}

GetInvoiceById(id:number):Promise<any>{
 return this.httpClient.get(ApiBaseUrl+ApiEndPoint.GetInvoice + '?id='+ id).toPromise();
}

DeleteInvoice(id:number): Promise<any> {
return this.httpClient.delete(ApiBaseUrl+ApiEndPoint.DeleteInvoice + '?id='+ id).toPromise();
}



}
