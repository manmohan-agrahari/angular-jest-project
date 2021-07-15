import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  data={
    data1: 'I am data1 inside data',
    data2: 'I am data2 inside data',
  }
  constructor() {}

  ngOnInit(): void {}
}
