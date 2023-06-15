import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGeneralInvoiceComponent } from './create-general-invoice.component';

describe('CreateGeneralInvoiceComponent', () => {
  let component: CreateGeneralInvoiceComponent;
  let fixture: ComponentFixture<CreateGeneralInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGeneralInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGeneralInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
