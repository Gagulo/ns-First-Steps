import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ActionBarComponent } from './ui/action-bar/action-bar.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

@NgModule({
  declarations: [ActionBarComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule
  ],
  exports: [ActionBarComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
