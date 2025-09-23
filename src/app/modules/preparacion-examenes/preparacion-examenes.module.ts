import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparacionExamenesRoutingModule } from './preparacion-examenes-routing.module';
import { PreparacionExamenesComponent } from './preparacion-examenes/preparacion-examenes.component';


@NgModule({
  declarations: [
    PreparacionExamenesComponent
  ],
  imports: [
    CommonModule,
    PreparacionExamenesRoutingModule
  ]
})
export class PreparacionExamenesModule { }
