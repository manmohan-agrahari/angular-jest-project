import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(){
    localStorage.setItem('user','manmohan')
  }

  checkAuthentication(){
    if(localStorage.getItem('user') == 'manmohan') {
      return true;

    }
    return false;
  }

}
