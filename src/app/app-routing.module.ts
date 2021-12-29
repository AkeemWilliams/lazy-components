import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) }, { path: 'sample', loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
