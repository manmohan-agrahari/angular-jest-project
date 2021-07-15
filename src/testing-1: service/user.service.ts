import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { IUser } from './user.model'

@Injectable({ providedIn: 'root' })
export class UserService {
  users: IUser[] = [
    {"id":"123","name":'manmohan',"age":20},
    {"id":"124","name":'ruchi',"age":21},
    {"id":"125","name":'mona',"age":22},
    {"id":"126","name":'raj',"age":23},
    {"id":"127","name":'ram',"age":24},
  ]
  constructor() {}
  getUsers(): IUser[] {
    return this.users
  }
  getGreeting():string{
    return "Good Morning"
  }

  getObservableGreeting():Observable<string> {
    return of('Good Evening')
  }
  getPromiseGreeting():Promise<string> {
    return new Promise((res, rej)=>{
      return res("Good Night")
    })  }
}
