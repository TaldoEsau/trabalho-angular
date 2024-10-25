import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareProductsComponent } from './hardware-products.component';

describe('HardwareProductsComponent', () => {
  let component: HardwareProductsComponent;
  let fixture: ComponentFixture<HardwareProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardwareProductsComponent]
    });
    fixture = TestBed.createComponent(HardwareProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
