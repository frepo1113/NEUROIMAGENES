import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'page',
    loadChildren: () => import('./modules/page/page.module').then(m => m.PageModule)
  },
  { path: '', redirectTo: 'page/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'page/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
