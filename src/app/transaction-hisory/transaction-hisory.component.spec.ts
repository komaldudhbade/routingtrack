import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHisoryComponent } from './transaction-hisory.component';

describe('TransactionHisoryComponent', () => {
  let component: TransactionHisoryComponent;
  let fixture: ComponentFixture<TransactionHisoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionHisoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionHisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
