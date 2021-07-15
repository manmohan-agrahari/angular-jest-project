import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[HelloDirective]'
})
export class HelloDirective {

  @Input('userInfo') username:string


  @HostBinding('style.background-color') backgroundColor:string;
  @HostBinding('style.font-size') fontSize:string;
  @HostBinding('innerHTML') innerHtml:string;

  constructor() {

  }


  //adding
  ngOnInit(){
    this.innerHtml= 'Hello, '+this.username;
    this.fontSize = '18px'
    this.backgroundColor = 'pink'
    console.log(this.username)
  }

  @HostListener('mouseover') onMouseOver() {
    this.fontSize = '28px'
    this.backgroundColor='orange'
  }
  @HostListener('mouseout') onMouseOut() {
    this.fontSize = '18px'
    this.backgroundColor='green'
  }

}
