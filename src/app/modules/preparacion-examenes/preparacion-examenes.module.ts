import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparacionExamenesRoutingModule } from './preparacion-examenes-routing.module';
import { PreparacionExamenesComponent } from './preparacion-examenes/preparacion-examenes.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    PreparacionExamenesComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    PreparacionExamenesRoutingModule
  ]
})
export class PreparacionExamenesModule { }
