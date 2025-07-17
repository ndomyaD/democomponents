import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  standalone: false,
  templateUrl: './form-component.html',
  styleUrl: './form-component.css'
})
export class FormComponent   {

  submit(login:any){
    console.log("Form submitted",login);
  }
}
