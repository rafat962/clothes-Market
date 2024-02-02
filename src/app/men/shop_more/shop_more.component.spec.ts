/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Shop_moreComponent } from './shop_more.component';

describe('Shop_moreComponent', () => {
  let component: Shop_moreComponent;
  let fixture: ComponentFixture<Shop_moreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shop_moreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shop_moreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
