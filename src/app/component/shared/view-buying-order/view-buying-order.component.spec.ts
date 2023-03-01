import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuyingOrderComponent } from './view-buying-order.component';

describe('ViewBuyingOrderComponent', () => {
  let component: ViewBuyingOrderComponent;
  let fixture: ComponentFixture<ViewBuyingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBuyingOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBuyingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
