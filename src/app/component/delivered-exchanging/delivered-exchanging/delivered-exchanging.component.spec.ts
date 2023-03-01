import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredExchangingComponent } from './delivered-exchanging.component';

describe('DeliveredExchangingComponent', () => {
  let component: DeliveredExchangingComponent;
  let fixture: ComponentFixture<DeliveredExchangingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveredExchangingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveredExchangingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
