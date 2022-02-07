import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzprojectComponent } from './quizzproject.component';

describe('QuizzprojectComponent', () => {
  let component: QuizzprojectComponent;
  let fixture: ComponentFixture<QuizzprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
