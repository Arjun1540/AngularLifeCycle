import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSpportComponent } from './customer-spport.component';

describe('CustomerSpportComponent', () => {
  let component: CustomerSpportComponent;
  let fixture: ComponentFixture<CustomerSpportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSpportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSpportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
