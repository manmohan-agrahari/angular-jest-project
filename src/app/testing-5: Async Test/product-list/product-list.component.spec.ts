import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { ProductServiceService } from '../product-service.service'

import { ProductListComponent } from './product-list.component'

describe('ProductListComponent', () => {
  let component: ProductListComponent
  let fixture: ComponentFixture<ProductListComponent>
  let productService: ProductServiceService
  let debugElement1: DebugElement
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [ProductServiceService],
      imports: [FormsModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent)
    component = fixture.componentInstance
    productService = TestBed.inject(ProductServiceService)
    debugElement1 = fixture.debugElement
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should test product filter product list', (done) => {
    component.searchText = 'sugar'
    let productSpy = spyOn(
      productService,
      'filterProductList',
    ).and.callThrough()
    /**
     * there will be cases when you need to call actual function so callThrough() helps
     * us to call directly original function instead of dummy one
     */
    //productSpy will get the most Recent execution of 'filterProductList' method
    //once  the filterProductList is called ,then we want to execute the code for testing
    component.filterProductList({})
    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges()
      //get text from first <li> of the list

      let val = debugElement1.query(By.css('#product_0')).nativeElement
        .textContent

      //let val= fixture.debugElement.nativeElement.querySelector('li').textContent
      expect(val).toContain(component.searchText)
      done()
    })
  })
})
