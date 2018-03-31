import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSubCatComponent } from './products-sub-cat.component';

describe('ProductsSubCatComponent', () => {
  let component: ProductsSubCatComponent;
  let fixture: ComponentFixture<ProductsSubCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSubCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSubCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
