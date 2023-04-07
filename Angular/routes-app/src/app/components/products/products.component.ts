import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {"id":1,"name":"Apple","description":"Fruit","price":"170.00","quantity":2},
    {"id":2,"name":"Mango","description":"Fruit","price":"302.00","quantity":10},
    {"id":3,"name":"Broccoli","description":"Vegetable","price":"279.00","quantity":3},
    {"id":4,"name":"Cold Latte","description":"Drinks","price":"200.00","quantity":1}
];

}
