import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingAdComponent } from './view-pending-ad.component';

describe('ViewPendingAdComponent', () => {
  let component: ViewPendingAdComponent;
  let fixture: ComponentFixture<ViewPendingAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPendingAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPendingAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
