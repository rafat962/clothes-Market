/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart_viewComponent } from './cart_view.component';

describe('Cart_viewComponent', () => {
  let component: Cart_viewComponent;
  let fixture: ComponentFixture<Cart_viewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart_viewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart_viewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
