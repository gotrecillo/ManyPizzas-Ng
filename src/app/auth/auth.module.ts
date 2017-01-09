import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './_services/authentication.service';

@NgModule({
    imports : [
      CommonModule,
      SharedModule,
      AuthRoutingModule,
      ReactiveFormsModule,
    ],

    declarations : [ LoginComponent ],

    exports : [ AuthRoutingModule ],

    providers : [ AuthenticationService ],
  }
)
export class AuthModule {
}
