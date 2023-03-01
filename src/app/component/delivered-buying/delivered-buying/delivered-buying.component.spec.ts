import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredBuyingComponent } from './delivered-buying.component';

describe('DeliveredBuyingComponent', () => {
  let component: DeliveredBuyingComponent;
  let fixture: ComponentFixture<DeliveredBuyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveredBuyingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveredBuyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
