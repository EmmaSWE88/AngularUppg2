import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartViewComponent } from './shoppingcart-view.component';

describe('ShoppingcartViewComponent', () => {
  let component: ShoppingcartViewComponent;
  let fixture: ComponentFixture<ShoppingcartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
