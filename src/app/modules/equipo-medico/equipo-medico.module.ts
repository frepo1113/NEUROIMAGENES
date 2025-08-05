import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipoMedicoRoutingModule } from './equipo-medico-routing.module';
import { EquipoMedicoComponent } from './equipo-medico/equipo-medico.component';


@NgModule({
  declarations: [
    EquipoMedicoComponent
  ],
  imports: [
    CommonModule,
    EquipoMedicoRoutingModule
  ]
})
export class EquipoMedicoModule { }
