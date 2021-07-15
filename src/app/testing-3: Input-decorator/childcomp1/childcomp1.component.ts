import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomp1',
  templateUrl: './childcomp1.component.html',
  styleUrls: ['./childcomp1.component.scss']
})
export class Childcomp1Component implements OnInit {
   @Input() value:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
