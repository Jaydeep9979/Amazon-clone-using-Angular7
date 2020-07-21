import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcategoryComponent } from './childcategory.component';

describe('ChildcategoryComponent', () => {
  let component: ChildcategoryComponent;
  let fixture: ComponentFixture<ChildcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
