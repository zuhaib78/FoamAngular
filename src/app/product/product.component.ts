import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MainServiceService } from '../services/main-service.service';
import { NotificationService } from '../services/notification.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [DatePipe],
})
export class ProductComponent implements OnInit {
  Tittle:string = "Products"
  ProductModal: BsModalRef;
  ProductList:any;
  Id:number = 0;
  constructor(private _modalService : BsModalService, private _mainService:MainServiceService, private notificationSerive: NotificationService, private datePipe: DatePipe) { }
  async ngOnInit(){
    await this.GetProducutList();
  }

CreateProduct(templete:TemplateRef<any>){
  this.Id=0;
    this.ProductModal = this._modalService.show(templete,{backdrop: 'static', keyboard: false, class: "inner-modal modal-custom-backdrop cpr-sm-modal"})
}

async GetProducutList(){
  this._mainService.GetProductList().then(x=>{
    this.ProductList = x;
  })
}

OnCloseProductModal(){
  this.ProductModal.hide();
  this.GetProducutList();
}

DeleteProduct(id:number){
this._mainService.DeleteProduct(id).then(x=>{
  if(x){
    this.notificationSerive.success('Product deleted successfully.');
    this.GetProducutList();
  }else{
    this.notificationSerive.error('Something went wrong.');
  }
});
}
EditProduct(templete:TemplateRef<any>, Id){
  this.Id = Id;
  debugger
this.ProductModal = this._modalService.show(templete,{} )
}

OnSucessCall(){
  debugger
  this.ProductModal.hide();
  this.GetProducutList();
}
}
