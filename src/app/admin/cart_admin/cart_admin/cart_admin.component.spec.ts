/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart_adminComponent } from './cart_admin.component';

describe('Cart_adminComponent', () => {
  let component: Cart_adminComponent;
  let fixture: ComponentFixture<Cart_adminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart_adminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart_adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
