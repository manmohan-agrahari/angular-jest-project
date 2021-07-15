import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../authentication.service';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authenService:AuthenticationService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers:[AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    authenService = TestBed.inject(AuthenticationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assert checkAuthentication has been called',()=>{
   /**
     * To test whether the particular method is called we are going to use spyOn
     * method it take two parameter
     * 1. object upon which u want to install spyOn
     * 2. second parameter is  string which is the method name indicating method that
     *    we want to spy on
     */

    // jest.spyOn(authenService, 'checkAuthentication')
     spyOn(authenService,'checkAuthentication').and.returnValue(true)
    let salSlip=component.getSalarySlip()
    expect(salSlip).toBe('salary slip')
    expect(authenService.checkAuthentication).toHaveBeenCalled()
    // inthis one we have not actually called checkAuthentication method
    // the spy on method just executed dummy methods

  })


  it('should return value "salary slip"',()=>{
    let salSlip=component.getSalarySlip()
    expect(salSlip).toBe('salary slip')

  })
  it('case:1 ***callThrough()*** should assert checkAuthentification is called',()=>{
    spyOn(authenService, 'checkAuthentication').and.callThrough()
    //By chaining the spy with and.callThrough, the spy will still
    //track all calls to it but in addition it will delegate to the actual implementation
    let salarySlip= component.getSalarySlip()
    expect(salarySlip).toBe('salary slip')
    expect(authenService.checkAuthentication).toHaveBeenCalled()
  })

  it('case:2 ***callFake()*** should assert checkAuthentification is called',()=>{
    spyOn(authenService, 'checkAuthentication').and.callFake(()=>{ return true;})
    //By chaining the spy with and.callFake,
    //all calls to the spy will delegate to the supplied function.

    let salarySlip= component.getSalarySlip()
    expect(salarySlip).toBe('salary slip')
    expect(authenService.checkAuthentication).toHaveBeenCalled()
  })
  it('case:2 ***returnValue()*** should assert checkAuthentification is called',()=>{
    spyOn(authenService, 'checkAuthentication').and.returnValue(false)
    //By chaining the spy with and.callFake,
    //all calls to the spy will delegate to the supplied function.

    let salarySlip= component.getSalarySlip()
    expect(salarySlip).toBe('Not Authenticated')
    expect(authenService.checkAuthentication).toHaveBeenCalled()
  })
  it('case:2 ***returnValue()*** should assert checkAuthentification is called',()=>{
    spyOn(authenService, 'checkAuthentication').and.returnValue(false)
    //By chaining the spy with and.callFake,
    //all calls to the spy will delegate to the supplied function.

    let salarySlip= component.getSalarySlip()
    expect(salarySlip).toBe('Not Authenticated')
    expect(authenService.checkAuthentication).toHaveBeenCalled()
  })
});
