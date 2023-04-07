import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  factorial(){
    let fact=1
    let n=5;
    let i=1;
    for(i=1;i<=n;i++){
      fact=fact*i;
    }
    return fact;
  }

  power(b:number,e:number){
    let result=1;
    for(var i=1;i<=e;i++){
      result*=b;
    }
    return result;
  }
  constructor() { }
}
