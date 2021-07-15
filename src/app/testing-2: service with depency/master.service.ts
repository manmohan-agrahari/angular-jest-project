import { Inject, Injectable } from '@angular/core';
import { SlaveService } from './slave.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private slaveService:SlaveService) { }

  getValue():string {
    return this.slaveService.getValue()
  }
}
