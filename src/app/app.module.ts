import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list'
import {MatInputModule} from '@angular/material/input'
import { MatDividerModule } from '@angular/material/divider';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeComponent } from './testing-4: SpyOn/employee/employee.component';
import { ProductListComponent } from './testing-5: Async Test/product-list/product-list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { App1Component } from './testing-5: Attribute directive/app1/app1.component';
import { HelloDirective } from './testing-5: Attribute directive/hello.directive';
import { MarbleObservableComponent } from './testing-7:  jest-marble/marble-observable/marble-observable.component';
import { Comp1Component } from './testing-3: Input-decorator/comp1/comp1.component';
import { Childcomp1Component } from './testing-3: Input-decorator/childcomp1/childcomp1.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProductListComponent,
    App1Component,
    HelloDirective,
    MarbleObservableComponent,
    Comp1Component,
    Childcomp1Component,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
