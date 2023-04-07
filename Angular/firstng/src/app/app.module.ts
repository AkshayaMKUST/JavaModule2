import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { MathComponent } from './math/math.component';
import { FormComponent } from './components/form/form.component';
import { HttpComponent } from './components/http/http.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    CalculatorComponent,
    MathComponent,
    FormComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
