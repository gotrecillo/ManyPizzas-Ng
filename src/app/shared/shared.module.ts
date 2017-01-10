import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmailValidator } from './validations/email/email-validators';

@NgModule({
    imports : [
      CommonModule,
      MaterialModule.forRoot(),
      RouterModule,
      FlexLayoutModule.forRoot(),
    ],

    declarations : [ NavbarComponent ],

    providers : [ EmailValidator ],

    exports : [ NavbarComponent, MaterialModule, FlexLayoutModule ],
  }
)
export class SharedModule {
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'pizza',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/pizza-icon.svg')
    );
  }
}
