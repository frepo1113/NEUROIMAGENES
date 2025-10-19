import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { InicialServiciosComponent } from './inicial-servicios/inicial-servicios.component';
import { VtmComponent } from './vtm/vtm.component';
import { PsgComponent } from './psg/psg.component';
import { EmgComponent } from './emg/emg.component';
import { EegComponent } from './eeg/eeg.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    InicialServiciosComponent,
    VtmComponent,
    PsgComponent,
    EmgComponent,
    EegComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
