import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaslistComponent } from './pizzas-list/pizzas-list.component';
import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PizzasRoutingModule,
  ],
  declarations: [PizzaslistComponent, PizzaItemComponent],
})
export class PizzasModule { }
