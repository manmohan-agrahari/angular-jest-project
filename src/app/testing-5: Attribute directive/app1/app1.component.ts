import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component implements OnInit {
  username:string
  isClicked:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.isClicked=true;
    console.log(this.isClicked, this.username)
  }

}
