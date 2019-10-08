import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {


  userName: string ='Arjun';
  email: string;
  password:string;
  constructor() { }

  ngOnInit() {
  }
onSubmit(form: NgForm){
  if(form.valid){
    console.log(form.value);
  }
  else {
    alert('there is an error');
  }
}
}
