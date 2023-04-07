import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string="";
  email: string="";
  password: string="";
  


  onSubmit() {
    console.log("Registration form submitted!");
    console.log("Name: "+this.name);
    console.log("Email: "+this.email);
    console.log("Password: "+this.password);
    
  }

}
