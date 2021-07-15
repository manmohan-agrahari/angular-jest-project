import { Component} from '@angular/core';
import { HttpService } from './testing-3: http-service/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-jest-project';
  constructor(private httpService:HttpService) {
    this.httpService.getPostList().subscribe((res)=>console.log(res))
  }


}
