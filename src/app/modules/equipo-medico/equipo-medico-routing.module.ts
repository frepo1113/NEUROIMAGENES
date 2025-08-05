import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoMedicoComponent } from './equipo-medico/equipo-medico.component';

const routes: Routes = [
  { path: '', component: EquipoMedicoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipoMedicoRoutingModule { }
