import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PizzaslistComponent } from './pizzas-list/pizzas-list.component';

@NgModule({
  imports : [
    RouterModule.forChild([
      { path : 'pizzas', component : PizzaslistComponent },
    ]),
  ],
  exports : [ RouterModule ],
})
export class PizzasRoutingModule {
}
