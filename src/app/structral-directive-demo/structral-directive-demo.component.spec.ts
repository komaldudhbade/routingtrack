import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructralDirectiveDemoComponent } from './structral-directive-demo.component';

describe('StructralDirectiveDemoComponent', () => {
  let component: StructralDirectiveDemoComponent;
  let fixture: ComponentFixture<StructralDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructralDirectiveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructralDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
