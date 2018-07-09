import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SingleDataComponent} from './single-data.component';

const routes: Routes = [
  {
    path: 'view/:id',
    component: SingleDataComponent
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleDataRoutingModule {}
