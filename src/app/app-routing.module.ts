import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SupportComponent } from './support/support.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerSpportComponent } from './customer-spport/customer-spport.component';
import { EmployeespportComponentComponent } from './employeespport-component/employeespport-component.component';
import { Employee } from './servieces/Employee';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


export const routes: Routes = [
  {path:'' , redirectTo:"/home", pathMatch: "full"},
{ path: 'home', component:HomeComponent},
{ path: 'about', component:AboutComponent},
{
   path: 'support', component:SupportComponent,children:[
  {path :'customer-support',component:CustomerSpportComponent},
  {path :'employee-support',component:EmployeespportComponentComponent}
]
},
{path: 'employee',component:EmployeeComponent },
{path : 'employee-details/:id',component:EmployeeDetailsComponent},
{path : 'add-employee',component:AddEmployeeComponent},
{ path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
