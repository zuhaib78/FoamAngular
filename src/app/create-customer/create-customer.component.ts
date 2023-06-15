import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CustomerDto} from '../Models/CustomerDto';
import { MainServiceService } from '../services/main-service.service';
import {NotificationService} from '../services/notification.service'

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  IsEditMode:boolean= false
  CustomerList:CustomerDto[];
  @Output() onsucess :EventEmitter<any>=new EventEmitter();
  @Input() EditCustomerID:number=0;
  CustomerForm :FormGroup;
  constructor(private fb:FormBuilder, private _mainService:MainServiceService, private _notificationService:NotificationService ) { }

  ngOnInit(): void {
  
     this.buildForm()
     debugger
      if(this.EditCustomerID>0){
        this.IsEditMode = true 
        this._mainService.GetCustomerById(this.EditCustomerID).then(x=>{
          if(x!=null){
            debugger
           let customerDto = new CustomerDto();
           customerDto.CustomerId = x.customerId;
           customerDto.CustomerName =x.customerName;
           customerDto.ContactNumber = x.contactNumber;
           customerDto.Email = x.email;
           customerDto.Address = x.address;
          

            this.CustomerForm.patchValue(customerDto);
          }

        });  
      }
  }
get f(){
 return this.CustomerForm.controls;
}
  buildForm(){
    this.CustomerForm = this.fb.group(
      {
        CustomerId: [0],
        CustomerName:["",[Validators.required]],
        ContactNumber:["",[Validators.required]],
        Email:["",[Validators.required]],
        Address:["",[Validators.required]]
       
      }
    );    
    }
  
  
  OnSubmit(){
  
    if(this.CustomerForm.valid){
      let formValue = new CustomerDto(); 
      formValue.CustomerId  = this.CustomerForm.value.CustomerId;
      formValue.CustomerName  = this.CustomerForm.value.CustomerName;
      formValue.ContactNumber  = this.CustomerForm.value.ContactNumber;
      formValue.Address  = this.CustomerForm.value.Address;
      formValue.Email = this.CustomerForm.value.Email;

      this._mainService.SaveCustomerData(formValue).then(x=>{
        if(x){
          this.onsucess.emit();
          this._notificationService.success("Customer Created successfully");
        }else{

          this._notificationService.error("something went wrong ");
          this.onsucess.emit();
        }
      })

      
     
    }
    }
  

}
