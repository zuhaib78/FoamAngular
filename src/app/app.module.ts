import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerComponent} from './customer/customer.component'
import{DasboardComponent} from './dasboard/dasboard.component';
import{HeaderComponent} from './header/header.component'
import {InvoicesComponent} from './invoices/invoices.component'
import {NavbarComponent} from './navbar/navbar.component'
import {ProductComponent} from './product/product.component'
import {StockComponent} from './stock/stock.component'
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { CreateGeneralInvoiceComponent } from './create-general-invoice/create-general-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DasboardComponent,
    HeaderComponent,
    NavbarComponent,
    InvoicesComponent,
    ProductComponent,
    StockComponent,
    CreateProductComponent,
    CreateCustomerComponent,
    CreateGeneralInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
