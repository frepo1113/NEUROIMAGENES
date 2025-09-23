import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreparacionExamenesComponent } from './preparacion-examenes/preparacion-examenes.component';

const routes: Routes = [
  { path: '', component: PreparacionExamenesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreparacionExamenesRoutingModule { }
