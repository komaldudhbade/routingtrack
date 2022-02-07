import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayofobjectComponent } from './arrayofobject.component';

describe('ArrayofobjectComponent', () => {
  let component: ArrayofobjectComponent;
  let fixture: ComponentFixture<ArrayofobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayofobjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayofobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
