import { Component } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  private url:string="https://jsonplaceholder.typicode.com/todos";
  public customer : any;
  private data:any;
  //every http request in angular is asynchronous -XHR cause - it cause page navigation
  //basically every http request on web is synchronous whereas in angular every http request is asynchronous
  constructor(private http:HttpClient){

  }

  ngOnInit(): void{
    console.log("oninit method");
    this.http.get(this.url)
    .subscribe((resData)=>{
      this.data=resData;
      console.log(this.data);
    });
  }
}

