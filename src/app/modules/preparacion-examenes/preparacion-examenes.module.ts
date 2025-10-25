import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparacionExamenesRoutingModule } from './preparacion-examenes-routing.module';
import { PreparacionExamenesComponent } from './preparacion-examenes/preparacion-examenes.component';
import { TestComponent } from './test/test.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EegComponent } from './eeg/eeg.component';
import { EmgComponent } from './emg/emg.component';
import { PnpsComponent } from './pnps/pnps.component';
import { PotencialesComponent } from './potenciales/potenciales.component';
import { PsgComponent } from './psg/psg.component';
import { VtmComponent } from './vtm/vtm.component';


@NgModule({
  declarations: [
    PreparacionExamenesComponent,
    TestComponent,
    ConsultaComponent,
    EegComponent,
    EmgComponent,
    PnpsComponent,
    PotencialesComponent,
    PsgComponent,
    VtmComponent
  ],
  imports: [
    CommonModule,
    PreparacionExamenesRoutingModule
  ]
})
export class PreparacionExamenesModule { }
