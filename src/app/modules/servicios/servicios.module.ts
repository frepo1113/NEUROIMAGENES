import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { InicialServiciosComponent } from './inicial-servicios/inicial-servicios.component';
import { VtmComponent } from './vtm/vtm.component';
import { PsgComponent } from './psg/psg.component';
import { EmgComponent } from './emg/emg.component';
import { EegComponent } from './eeg/eeg.component';
import { TestComponent } from './test/test.component';
import { PotencialesComponent } from './potenciales/potenciales.component';
import { PnpsComponent } from './pnps/pnps.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NeurologiaAdultoComponent } from './consulta/neurologia-adulto/neurologia-adulto.component';
import { NeurologiaPediatricaComponent } from './consulta/neurologia-pediatrica/neurologia-pediatrica.component';
import { NeuropsicologiaAdultoComponent } from './consulta/neuropsicologia-adulto/neuropsicologia-adulto.component';
import { NeuropsicologiaPediatricaComponent } from './consulta/neuropsicologia-pediatrica/neuropsicologia-pediatrica.component';
import { FisiatriaComponent } from './consulta/fisiatria/fisiatria.component';
import { AplicacionToxinaComponent } from './consulta/aplicacion-toxina/aplicacion-toxina.component';
import { InfiltracionBloqueosComponent } from './consulta/infiltracion-bloqueos/infiltracion-bloqueos.component';


@NgModule({
  declarations: [
    InicialServiciosComponent,
    VtmComponent,
    PsgComponent,
    EmgComponent,
    EegComponent,
    TestComponent,
    PotencialesComponent,
    PnpsComponent,
    ConsultaComponent,
    NeurologiaAdultoComponent,
    NeurologiaPediatricaComponent,
    NeuropsicologiaAdultoComponent,
    NeuropsicologiaPediatricaComponent,
    FisiatriaComponent,
    AplicacionToxinaComponent,
    InfiltracionBloqueosComponent,
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
