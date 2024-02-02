/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Product_adminComponent } from './product_admin.component';

describe('Product_adminComponent', () => {
  let component: Product_adminComponent;
  let fixture: ComponentFixture<Product_adminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product_adminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product_adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
