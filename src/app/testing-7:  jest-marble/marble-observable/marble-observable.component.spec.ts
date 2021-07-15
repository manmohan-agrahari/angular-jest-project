import { ComponentFixture, TestBed } from '@angular/core/testing';
import {cold, hot}  from 'jest-marbles'
import {of, throwError, from} from 'rxjs'
import {map, flatMap} from 'rxjs/operators'

import { MarbleObservableComponent } from './marble-observable.component';

describe('MarbleObservableComponent', () => {
  let component: MarbleObservableComponent;
  let fixture: ComponentFixture<MarbleObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarbleObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should demonstrate example of marble diagram',()=>{
    const source= cold('-x-|')
    const expected= cold('-x-|')
    expect(source).toBeObservable(expected)
  })

  it('should demonstrate the hot observable and subscription',()=>{
    const hotSource= hot('-a-^-b-c|',{a:10, b:20, c:30})
    //In case of hotObservable it begins to emit data immediately but until the subscription is
    //there the data is not capture but whatever the data emitted before the subscription will be lost
    // and data after the subscription will be capture.
    const subscription = '^----!'

    // '!' we have added unsubscription(!)- unsubscription symbol
    const coldSource= cold('--x-y|',{x:20, y:30})
    expect(hotSource).toBeObservable(coldSource)
    expect(hotSource).toHaveSubscriptions(subscription)
  })


  it('should test cold method with operator', ()=> {
    const ofObs= of(1,2,3)
    const coldObs= cold('(x-y-z|)', {x:1, y:2, z:3})
    expect(ofObs).toBeObservable(coldObs)
  })


  it('should test error thrown',()=>{
    const source= from([1,2,3,4]).pipe(
      flatMap((data)=>{
        if(data>=3)
        return  throwError(new Error('Error Occured!'))
        return of(data)
      })
    )

    const expected=cold('(-x-y-#)',{x:1,y:2}, new Error('Error Occured!'))
    expect(source).toBeObservable(expected)
  })

});
