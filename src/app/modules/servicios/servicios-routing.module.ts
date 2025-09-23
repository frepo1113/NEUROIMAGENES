import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialServiciosComponent } from './inicial-servicios/inicial-servicios.component';
import { VtmComponent } from './vtm/vtm.component';
import { PsgComponent } from './psg/psg.component';
import { EmgComponent } from './emg/emg.component';

const routes: Routes = [
  { path: '', component: InicialServiciosComponent },
  { path: 'vtm', component: VtmComponent },
  { path: 'psg', component: PsgComponent },
  { path: 'emg', component: EmgComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
