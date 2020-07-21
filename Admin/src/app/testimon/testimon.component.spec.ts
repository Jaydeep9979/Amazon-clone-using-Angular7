import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonComponent } from './testimon.component';

describe('TestimonComponent', () => {
  let component: TestimonComponent;
  let fixture: ComponentFixture<TestimonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
