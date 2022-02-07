import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailSignUpComponent } from './gmail-sign-up.component';

describe('GmailSignUpComponent', () => {
  let component: GmailSignUpComponent;
  let fixture: ComponentFixture<GmailSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmailSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
