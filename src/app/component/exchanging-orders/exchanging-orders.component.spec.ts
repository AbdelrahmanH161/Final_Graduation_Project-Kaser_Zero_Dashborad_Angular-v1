import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangingOrdersComponent } from './exchanging-orders.component';

describe('ExchangingOrdersComponent', () => {
  let component: ExchangingOrdersComponent;
  let fixture: ComponentFixture<ExchangingOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangingOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
