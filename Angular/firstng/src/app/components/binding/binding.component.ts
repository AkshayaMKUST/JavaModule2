import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/model/Item';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit,OnChanges,OnDestroy{

  ngOnChanges(changes: SimpleChanges): void {
    console.log('from... OnChanges..');
    //throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    console.log('from ... OnDestroy');
    //throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    console.log('from..OnInit');
    //throw new Error('Method not implemented.');
  }

  productId:number=127676;
  description="Apple Mac Book - Retina eye";
  qty : number=0;
  price:number = 200000;
  available : string = 'green';
  notavailable : string = 'red';
  delivery : string = 'red';
  isMember=true;
  isqtyavailable=this.qty>0;
  orderedqty : number = 0;
  

  takeOrder():void{
    console.log(this.orderedqty+" Order(s) Placed");
  }

  products = [
      {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
      {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
      {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
      {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
  ];


  items : Item[]=[

  new Item(1,"Iphone 14","Smart Phone",78000,5),
  new Item(2, "Samsung Galaxy S23","Smart Phone",100000,10),
  new Item(3, "OnePlus11","Smart Phone",89000,3)
  ];

  

}


