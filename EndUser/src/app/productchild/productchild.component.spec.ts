import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductchildComponent } from './productchild.component';

describe('ProductchildComponent', () => {
  let component: ProductchildComponent;
  let fixture: ComponentFixture<ProductchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
