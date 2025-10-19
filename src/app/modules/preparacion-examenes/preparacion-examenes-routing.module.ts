import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreparacionExamenesComponent } from './preparacion-examenes/preparacion-examenes.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: PreparacionExamenesComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreparacionExamenesRoutingModule { }
