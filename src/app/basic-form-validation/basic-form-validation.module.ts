import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import {BasicFormValidationRoutingModule} from './basic-form-validation-routing.module';
import {BasicFormValidationComponent} from './basic-form-validation.component';

@NgModule({
  imports: [
    SharedModule,
    BasicFormValidationRoutingModule
  ],
  declarations: [
    BasicFormValidationComponent
  ]
})
export class BasicFormValidationModule {}
