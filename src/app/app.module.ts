import { RouterModule, Routes } from '@angular/router';
import { SampleService } from './servieces/sample.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [Dataserviece, SampleService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
