import {ProductDTO} from './ProductDTO';
export class InvoiceDto{

      Id:number;
      InvoiceNumber: string;
      InvoiceDate:Date;
      InvoiceDueDate:Date
      TotalPrice:number
      Customer: CustomerDto;
      ProductIdsList:InvoiceDetailDto[];


  }
  
  
 export class InvoiceDetailDto {
      ProductId :number;
      Quantity:number;
      SalesPrice:number;
      ProdcutTotalPrice:number
    

 } 
 
 
  export class CustomerDto{
    public  CustomerId:number;
    public  CustomerName:string;
    public  ContactNumber :string;
    public  Address: string;
}

