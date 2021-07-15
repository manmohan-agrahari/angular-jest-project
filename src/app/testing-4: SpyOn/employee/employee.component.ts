import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private authService:AuthenticationService) {
    this.authService.authenticate();
   }

  ngOnInit(): void {
  }

  getSalarySlip(){

    if(this.authService.checkAuthentication()) {
      return 'salary slip'
    }
    return "Not Authenticated"

  }

}
