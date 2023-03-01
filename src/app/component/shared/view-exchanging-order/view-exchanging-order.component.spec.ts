import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExchangingOrderComponent } from './view-exchanging-order.component';

describe('ViewExchangingOrderComponent', () => {
  let component: ViewExchangingOrderComponent;
  let fixture: ComponentFixture<ViewExchangingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExchangingOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExchangingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
