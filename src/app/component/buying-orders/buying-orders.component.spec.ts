import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingOrdersComponent } from './buying-orders.component';

describe('BuyingOrdersComponent', () => {
  let component: BuyingOrdersComponent;
  let fixture: ComponentFixture<BuyingOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
