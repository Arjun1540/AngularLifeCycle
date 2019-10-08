import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { EMPLOYEES } from './mock-employee';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees():Promise<Employee[]>
{
  return Promise.resolve(EMPLOYEES);
}
  getEmployee(id:number):Promise<Employee>{
   return this.getEmployees().then(emps => emps.find(emp=> emp.id===id))
  }
  deleteEmployee(id:number): void{
    this.getEmployees().then(employees =>{
      let emp=employees.find(obj =>obj.id ===id);
      let empIndex =employees.indexOf(emp);
      employees.splice(empIndex,1);
    })
  }

  addEmployee(employee:Employee): void{
    this.getEmployees().then(employees=>{
      let maxIndex = employees.length -1;
      let employeewithMaxIndex =employees[maxIndex];
      employee.id=employeewithMaxIndex.id + 1;
      employees.push(employee);
    })
  }
}
