import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {DataListModule} from './data-list/data-list.module';
import {SingleDataModule} from './single-data/single-data.module';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'editor',
    loadChildren: './editor/editor.module#EditorModule'
  },
  {
    path: 'article',
    loadChildren: './article/article.module#ArticleModule'
  },
  {
    path: 'form-validation',
    loadChildren: './basic-form-validation/basic-form-validation.module#BasicFormValidationModule'
  },
  {
    path: 'data',
    loadChildren: './data-list/data-list.module#DataListModule'
  },
  {
    path: 'single-data',
    loadChildren: './single-data/single-data.module#SingleDataModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
