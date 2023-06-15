import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDTO } from '../Models/ProductDTO';
import { MainServiceService } from '../services/main-service.service';
import { NotificationService } from '../services/notification.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  providers: [DatePipe],
})
export class CreateProductComponent implements OnInit {

  ProductForm:FormGroup;
  IsEditMode:boolean = false;
  @Input() Id:number = 0;
  @Output() onSuccess: EventEmitter<any>= new EventEmitter<any>() 


  constructor(private fb:FormBuilder, private _mainService:MainServiceService, private _notificationService: NotificationService, private datePipe: DatePipe) { }
  selectedDate:Date;
  ngOnInit(): void {
    this.buildForm();
  
    if(this.Id>0){
      this.IsEditMode = true;
      this._mainService.GetProductById(this.Id).then(x=>{
       let formValue=new ProductDTO();
       debugger
       formValue.Id = x.id;
       formValue.Name= x.name;
     
       formValue.SalesPrice = x.salesPrice;
       formValue.ProductCatagory = x.productCatagory;
       formValue.AvailableStock = x.availableStock;
      this.ProductForm.patchValue(formValue);
      //  this.ProductForm.patchValue(x); 
      })
    }
  }

  get f(){
    return this.ProductForm.controls;
  }
  buildForm(){
    this.ProductForm = this.fb.group({
      Id:[0],
      Name:["",[Validators.required]],
      SalesPrice:[null,[Validators.required]],
      AvailableStock: [null,Validators.required],
    
      ProductCatagory:[null,Validators.required]  
    });
  }
  OnChangeValues(event){
    debugger
    let val =  Number(event.target.value);
    this.ProductForm.controls['ProductCatagory'].setValue(val)
    this.ProductForm.updateValueAndValidity();
  }

  OnSubmit(){

    if(this.ProductForm.valid){
     
      let formValue = this.ProductForm.value as ProductDTO;
     
      this._mainService.AddupdateProduct(formValue).then(x=>{
          if(x){
            this._notificationService.success( this.IsEditMode? "Produc Updated successfully":"Product Created successfully");
            this.onSuccess.emit();
          }
      })
    }
  }

}
