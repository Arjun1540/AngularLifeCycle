import { RouterModule, Routes } from '@angular/router';
import { SampleService } from './servieces/sample.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//FormsModule is required for Template-Driven Froms
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
//ReactiveFormsModule is required for Reactive-forms and Model-Drive 
import { AppRoutingModule } from './app-routing.module';
import { MylifeComponent } from './mylife/mylife.component';
import { Dataserviece } from './servieces/data.serveiece';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { SampleComponent } from './sample/sample.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerSpportComponent } from './customer-spport/customer-spport.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeespportComponentComponent } from './employeespport-component/employeespport-component.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './servieces/employee.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
@NgModule({
  declarations: [
    MylifeComponent,
    DemoComponentComponent,
    SampleComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SupportComponent,
    IndexComponent,
    PageNotFoundComponent,
    CustomerSpportComponent,

    EmployeeComponent,

    EmployeespportComponentComponent,

    EmployeeDetailsComponent,
    AddEmployeeComponent,
    TemplateformComponent,
    ReactiveformComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Dataserviece, SampleService,EmployeeService],
  bootstrap: [TemplateformComponent]
})
export class AppModule { }
