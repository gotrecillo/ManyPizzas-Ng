import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports : [
    CommonModule,
    MaterialModule.forRoot(),
  ],

  declarations : [ NavbarComponent ],

  exports : [ NavbarComponent, MaterialModule ],
})
export class SharedModule {
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'pizza',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/pizza-icon.svg'));
  }
}
