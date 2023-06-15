import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomerDto } from '../Models/CustomerDto';
import { MainServiceService } from '../services/main-service.service'
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  Tittle: string = "Customer";
  CustomerModal: BsModalRef
  CustomerList: any;
  EditCustomerID: number = 0;


  constructor(private _modalService: BsModalService, private _mainService: MainServiceService, private _notificationService: NotificationService) { }

  ngOnInit() {

    this.GetCustomerList();
  }


  GetCustomerList() {
    this._mainService.GetCustomerList().then(x => {
      this.CustomerList = x;
    });
  }

  createCustomer(templete: TemplateRef<any>) {
    this.EditCustomerID = 0;
    this.CustomerModal = this._modalService.show(templete, { backdrop: 'static', keyboard: false, class: "inner-modal modal.show" })
  }
  closeModal($event) {
    this.CustomerModal.hide();
    this.GetCustomerList();
  }

  EditCustomer(templete: TemplateRef<any>, customerId: number) {
    this.EditCustomerID = customerId;
    this.CustomerModal = this._modalService.show(templete, { backdrop: 'static', keyboard: false, class: "inner-modal modal.show" })
  }
  DeleteCustomer(id: number) {
    this._notificationService.warning("Are you sure you want to remove this customer?").then(x => {
      if (x.isConfirmed) {
        this._mainService.DeleteCustomer(id).then(x => {
          if (x) {
            this._notificationService.success("Customer deleted successfully");
            this.GetCustomerList();
          }

        });
      }
    });
  }


}
