import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../servieces/employee.service';
import { Employee} from '../servieces/Employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers:[EmployeeService]
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee =new Employee();
  constructor(private _empSerice:EmployeeService) { }

  ngOnInit() {
  }

}
