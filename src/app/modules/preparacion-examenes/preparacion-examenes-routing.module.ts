import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreparacionExamenesComponent } from './preparacion-examenes/preparacion-examenes.component';
import { TestComponent } from './test/test.component';
import { VtmComponent } from './vtm/vtm.component';
import { PsgComponent } from './psg/psg.component';
import { EmgComponent } from './emg/emg.component';
import { EegComponent } from './eeg/eeg.component';
import { PnpsComponent } from './pnps/pnps.component';
import { PotencialesComponent } from './potenciales/potenciales.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  { path: '', component: PreparacionExamenesComponent },
  { path: 'vtm', component: VtmComponent},
    { path: 'psg', component: PsgComponent },
    { path: 'emg', component: EmgComponent },
    { path: 'eeg', component: EegComponent },
    { path: 'test', component: TestComponent },
    { path: 'pnps', component: PnpsComponent },
    { path: 'potenciales', component: PotencialesComponent },
    { path: 'consulta', component: ConsultaComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreparacionExamenesRoutingModule { }
