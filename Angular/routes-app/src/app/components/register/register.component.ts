import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string="";
  email: string="";
  password: string="";
  date : any=0;
  mobile : number=0;


  onSubmit() {
    console.log("Registration form submitted!");
    console.log("Name: "+this.name);
    console.log("Email: "+this.email);
    console.log("Password: "+this.password);
    console.log("Mobile :  "+this.mobile);
  }

  

}
