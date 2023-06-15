import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MainServiceService } from '../services/main-service.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {InvoiceDetailDto, InvoiceDto} from '../Models/InvoiceDto';
import { CustomerDto } from '../Models/CustomerDto';

@Component({
  selector: 'app-create-general-invoice',
  templateUrl: './create-general-invoice.component.html',
  styleUrls: ['./create-general-invoice.component.scss']
})
export class CreateGeneralInvoiceComponent implements OnInit {
  Tittle:string ="Customer Invoice";
  InvoiceModal: BsModalRef;
  InvoicetList:any;
  @Input() Id:number=0;
  InvoiceNumber:string="";


  form :FormGroup;
  private lastSequenceNumber = 0;
  
  options = [
    { id: 1, option: 'Option 1' },
    { id: 2, option: 'Option 2' },
    { id: 3, option: 'Option 3' }
  ];
  selectedOption: any;

  constructor(private _modalService: BsModalService,private _mainService:MainServiceService, private fb : FormBuilder) { }

ngOnInit(): void {
const prefix = 'INV-000';
this.InvoiceNumber = prefix + this.lastSequenceNumber+1;
this.buildForm();
  }

  get ProductList() { return this.form.get('ProductList') as FormArray }
  buildForm(){
    this.form = this.fb.group({
      Id:[0],
      InvoiceNumber: [''],
      InvoiceDate:[null],
      InvoiceDueDate:[null],
    
      CustomerId:[0],
      Name:[''],
      PhoneNo:[''],
      Address:[''],
    
      ProductList : this.fb.array([
        this.fb.group({
        ProductId :[null],
        Quantity:[0],
        SalesPrice:[null],
        ProdcutTotalPrice: [0],
          
      })
      
    ]),
    TotalPrice:[0]


    });
  }


  createFormGroup() {
    return  this.fb.group({
      ProductId :[0],
      Quantity:[0],
      SalesPrice:[null],
      ProdcutTotalPrice: [0],
        
    })
}

addFormGroup(){

  this.ProductList.push(this.createFormGroup())
}

removeFormGroup(index: number) {
  this.ProductList.removeAt(index)
}


 

  onSubmit(){
    debugger
if(this.form.valid){

  let model = new  InvoiceDto(); 

  model.Id =  this.form.value.Id;
  model.InvoiceDate =  this.form.value.InvoiceDate;
  model.InvoiceDueDate =  this.form.value.InvoiceDueDate;
  model.InvoiceNumber =  this.form.value.InvoiceNumber;
  model.TotalPrice = this.form.value.TotalPrice;

  let customerModal = new CustomerDto();


 customerModal.CustomerId = this.form.value.CustomerId;
 customerModal.CustomerName = this.form.value.CustomerName;
 customerModal.ContactNumber = this.form.value.PhoneNo ;
 customerModal.Address = this.form.value.Address;

 let productList =[];

 let list =  this.form.value.ProductList as [];

 (this.ProductList.controls as FormGroup[]).forEach((control) => {
  // extract the values from the control
  const productId = control.get('ProductId').value;
  const quantity = control.get('Quantity').value;
  const salesPrice = control.get('SalesPrice').value;
  const productTotalPrice = control.get('ProdcutTotalPrice').value;

  // create a new object with the extracted values
  const productItem = {
    ProductId: productId,
    Quantity: quantity,
    SalesPrice: salesPrice,
    ProductTotalPrice: productTotalPrice
  };

  // push the new object into the list
  productList.push(productItem);
});


model.Customer = customerModal;
model.ProductIdsList = productList;
console.log()





  




}
  
  }


}
