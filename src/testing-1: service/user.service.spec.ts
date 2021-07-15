import { TestBed } from '@angular/core/testing'
import { UserService } from './user.service'

describe('User Service', () => {
  let service: UserService
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
    })
    service = TestBed.inject(UserService) //this will return an instance of userservice class
  })
  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  it(' getGreeting should return "Good Morning"', () => {
    expect(service.getGreeting()).toBe('Good Morning')
  })

  /**
   * test will not until done is not called
   * otherwise if u not use done callback it may not wait to complete test
   */
  it('getObservable greeting should return "Good evening"', (done) => {
    service.getObservableGreeting().subscribe((res) => {
      expect(res).toBe('Good Evening')
      done()
    })
  })

  it('getObservable greeting should return "Good evening"', (donePromise) => {
    service.getPromiseGreeting().then((res) => {
      expect(res).toBe('Good Night')
      donePromise()
    })
  })
})
