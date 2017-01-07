import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports : [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
  ],

  declarations : [ LoginComponent ],

  exports : [ AuthRoutingModule ]
})
export class AuthModule {
}
