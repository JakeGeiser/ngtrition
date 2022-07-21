import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFetchComponent } from './product-fetch.component';

describe('ProductFetchComponent', () => {
  let component: ProductFetchComponent;
  let fixture: ComponentFixture<ProductFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFetchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
