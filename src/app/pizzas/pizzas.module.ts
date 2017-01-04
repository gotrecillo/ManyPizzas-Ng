import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaslistComponent } from './pizzas-list/pizzas-list.component';
import { PizzasRoutingModule } from './pizzas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PizzasRoutingModule,
  ],
  declarations: [PizzaslistComponent],
})
export class PizzasModule { }
