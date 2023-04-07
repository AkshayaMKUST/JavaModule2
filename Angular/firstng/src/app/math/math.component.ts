import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {

  a : any=0;
  result : number=0;
  res1 : number=0;
  res2 : number=0;
  res3 : number=0;
  res4 : number=0;
  factorial():any{
    let fact=1;
    for(var i=1;i<=this.a;i++){
      fact=fact*i;
    }
   this.result= fact;
  }

  sumofeven():any{
    let sum=0;
    for(var i=1;i<=this.a;i++){
      if(i%2==0){
        sum=sum+i;
      }
    }
    this.res1=sum;
  }
  sumofodd():any{
    let sum=0;
    for(var i=1;i<=this.a;i++){
      if(i%2!=0){
        sum=sum+i;
      }
    }
    this.res2=sum;
  }

  sumoffib():any{
    let sum=0;
    let f=0;
    let s=1;
    let fib=0;
    for(var i=2;i<=this.a;i++){
      fib=f+s;
      f=s;
      s=fib;
      
    }
    this.res3=fib;
  }

  sumofdigit():any{
    let sum=0;
    let r=0;
    while(this.a>0){
      r=this.a%10;
      sum=sum+r;
      this.a=this.a/10;
    }
    this.res4=sum;
  }


  


}
