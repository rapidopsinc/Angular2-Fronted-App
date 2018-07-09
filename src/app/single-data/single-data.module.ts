import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HttpModule } from '@angular/http';
import {SingleDataComponent} from './single-data.component';
import {SingleDataRoutingModule} from './single-data-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    SingleDataRoutingModule
  ],
  declarations: [
    SingleDataComponent
  ]
})
export class SingleDataModule {}
