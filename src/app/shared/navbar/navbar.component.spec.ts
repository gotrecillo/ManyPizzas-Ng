/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared.module';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
             imports : [
               CommonModule,
               SharedModule,
               MaterialModule.forRoot(),
               RouterTestingModule.withRoutes([
               ]),
             ],
           })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
