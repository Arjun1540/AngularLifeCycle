import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../servieces/employee.service';
import { Employee } from '../servieces/Employee'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers :[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  employees:Employee[];

  constructor(private _empService:EmployeeService) { }

  ngOnInit() {
    this._empService.getEmployees().then(data=>{
      this.employees=data;
      console.log(data);

    }).catch(err=>{
      console.log(err)
    })
  }
  deleteEmployee(id:number): void{
    this._empService.deleteEmployee(id);
  }

}
