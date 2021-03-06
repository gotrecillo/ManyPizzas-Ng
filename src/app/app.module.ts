import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { PizzasModule } from './pizzas/pizzas.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations : [
    AppComponent,
  ],

  imports : [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    PizzasModule,
    AuthModule,
  ],

  providers : [],
  bootstrap : [ AppComponent ],
})
export class AppModule {
}
