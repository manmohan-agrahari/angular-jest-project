import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe("App Component",()=>{
 let component:AppComponent;
 let fixture:ComponentFixture<AppComponent>

 beforeEach(()=>{
   TestBed.configureTestingModule( {
     declarations:[AppComponent],
     schemas:[CUSTOM_ELEMENTS_SCHEMA]
   })
   fixture=TestBed.createComponent(AppComponent);
   component=fixture.componentInstance
 })

 it('should initialised',()=>{
    expect(component).toBeTruthy()
 })

})
