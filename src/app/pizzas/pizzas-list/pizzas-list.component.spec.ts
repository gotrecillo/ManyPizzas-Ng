/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PizzaslistComponent } from './pizzas-list.component';
import { PizzaItemComponent } from '../pizza-item/pizza-item.component';
import { SharedModule } from '../../shared/shared.module';

describe('PizzaslistComponent', () => {
  let component: PizzaslistComponent;
  let fixture: ComponentFixture<PizzaslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
             imports      : [ SharedModule ],
             declarations : [ PizzaslistComponent, PizzaItemComponent ],
           })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(PizzaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
