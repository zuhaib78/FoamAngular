import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {path:'dashboard', component:DasboardComponent},
  {path: 'customer' , component:CustomerComponent},
  {path : 'invoices', component:InvoicesComponent},
  {path: 'product',component:ProductComponent},
  {path: 'stock',component:StockComponent},
   { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
