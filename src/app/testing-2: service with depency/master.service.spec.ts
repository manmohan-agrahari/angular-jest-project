import { TestBed } from "@angular/core/testing"
import { MasterService } from "./master.service"
import { SlaveService } from "./slave.service"

describe('Master Service', ()=>{
  let masterService:MasterService
  let slaveService: SlaveService
 /* TestBed.configureTestingModule({
    providers:[SlaveService, MasterService]
  })
  slaveService=TestBed.inject(SlaveService)
  masterService=TestBed.inject(MasterService)
  */
  masterService= new MasterService(new SlaveService())


  it('should be created', ()=> {
    expect(masterService).toBeTruthy()
  })

})
