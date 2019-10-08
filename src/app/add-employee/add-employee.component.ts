import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../servieces/employee.service';
import {Router} from '@angular/router';
import { FormControl , FormGroup ,FormBuilder ,  Validators } from '@angular/forms';
 import { Employee} from '../servieces/Employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers:[EmployeeService]
})
export class AddEmployeeComponent implements OnInit {
   
  employee: Employee=new Employee();

  empFormGroup =new FormGroup({
    name :new FormControl(),
    salary : new FormControl(),
    city : new FormControl()
  })
  constructor(private _empSerice:EmployeeService,
    private _router:Router,
    private _builder : FormBuilder) {
      this.createForm();
     }
createForm(){
  this.empFormGroup = this._builder.group({
    name: ['',Validators.compose([Validators.required,Validators.maxLength(10)])],
    salary : ['',Validators.required],
    city : ['',Validators.required]
  })
}
  ngOnInit() {
  }
  addEmployee(){
    this._empSerice.addEmployee(this.employee);
    this._router.navigate(['/employee']);
  }
}
