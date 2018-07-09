import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import {DataListComponent} from './data-list.component';
import {DataListRoutingModule} from './data-list-routing.module';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    SharedModule,
    DataListRoutingModule,
    HttpModule
  ],
  declarations: [
    DataListComponent
  ]
})
export class DataListModule {}
