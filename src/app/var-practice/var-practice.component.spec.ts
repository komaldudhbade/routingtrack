import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarPracticeComponent } from './var-practice.component';

describe('VarPracticeComponent', () => {
  let component: VarPracticeComponent;
  let fixture: ComponentFixture<VarPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
