import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlaveService {

  constructor() { }
  getValue():string {
    return "salve service"
  }
}
