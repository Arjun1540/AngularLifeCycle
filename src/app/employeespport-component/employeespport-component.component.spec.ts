import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeespportComponentComponent } from './employeespport-component.component';

describe('EmployeespportComponentComponent', () => {
  let component: EmployeespportComponentComponent;
  let fixture: ComponentFixture<EmployeespportComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeespportComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeespportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
