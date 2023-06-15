import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MainServiceService } from '../services/main-service.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  Tittle:string ="Invoices";
  InvoiceModal: BsModalRef;
  InvoicetList:any;
  Id:number=0;
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

  }

  
  




 
  CreateInvoice(templete:TemplateRef<any>){
    this.Id=0;
      this.InvoiceModal = this._modalService.show(templete,{backdrop: 'static', keyboard: false,  class: 'custom-modal' })
  }
  
  async InvoicesList(){
    this._mainService.GetProductList().then(x=>{
      this.InvoicetList = x;
    })
  }
  
  OnCloseInvoiceModal(){
    this.InvoiceModal.hide();
    this.InvoicesList();
  }
  
  DeleteInvoice(id:number){
  this._mainService.DeleteInvoice(id).then(x=>{
  });
  }
  EditInvoice(templete:TemplateRef<any>, Id){
    this.Id = Id;
  this.InvoiceModal = this._modalService.show(templete,{} )
  }
  
  OnSucessCall(){
    
    this.InvoiceModal.hide();
    this.InvoicesList();
  }
  

  onSubmit(){
if(this.form.valid){

  console.log(this.form);


}
  
  }



}

