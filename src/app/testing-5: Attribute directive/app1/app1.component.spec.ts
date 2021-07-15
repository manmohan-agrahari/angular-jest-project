
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HelloDirective } from '../hello.directive';

import { App1Component } from './app1.component';

describe('App1Component', () => {
  let component: App1Component;
  let fixture: ComponentFixture<App1Component>;
  let debugElement: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App1Component, HelloDirective ],
      imports:[FormsModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App1Component);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the directive for its changes to div',() => {
    component.username='Radhika'
    let  btn=debugElement.query(By.css('Button'))
    btn.triggerEventHandler('click',{});
    fixture.detectChanges()
    let div= debugElement.query(By.css('#customDiv'))
    expect(div.nativeElement.textContent).toContain('Radhika')
    expect(div.nativeElement.style.backgroundColor).toBe('pink')

    div.triggerEventHandler('mouseover', null)
    fixture.detectChanges()
    expect(div.nativeElement.style.backgroundColor).toBe("orange")
    expect(div.nativeElement.style.fontSize).toBe('28px')

  })
});
