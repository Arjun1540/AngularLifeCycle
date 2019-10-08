import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../servieces/employee.service';
import {Location } from "@angular/common";
import { Employee} from '../servieces/Employee';
import {ActivatedRoute,Params,ActivationEnd } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:Employee =new Employee();
  constructor(private routes:ActivatedRoute, 
     private _empService:EmployeeService,
     private _location:Location) {
    
  }

  ngOnInit() {
    this.routes.params.forEach((params: Params)=>{
      if (params['id']!== undefined){
        let id = +params['id'];
        console.log(id);
        this._empService.getEmployee(id).then(result=>this.employee=result)
        console.log(this.employee);

      }
    })
  }
    goBack(): void{
      this._location.back();
      

    
  }

}
