import { Component, OnInit } from '@angular/core';
export interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', class: 'code-wallet' },
  { path: '/customer', title: 'Customer', class: 'code-instructor' },
  { path: '/invoices', title: 'Invoices', class: 'code-invoice-o' },
  { path: '/product', title: 'Product', class: 'code-store' },
  { path: '/stock', title: 'Stock', class: 'code-go-to-cart-o'},
];


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public menuItems: any[];
  ngOnInit() {
    
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
