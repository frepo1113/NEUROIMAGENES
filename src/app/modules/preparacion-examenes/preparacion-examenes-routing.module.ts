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
import { FisiatriaComponent } from './consulta/fisiatria/fisiatria.component';
import { NeurologiaAdultoComponent } from './consulta/neurologia-adulto/neurologia-adulto.component';
import { NeurologiaPediatricaComponent } from './consulta/neurologia-pediatrica/neurologia-pediatrica.component';
import { NeuropsicologiaAdultoComponent } from './consulta/neuropsicologia-adulto/neuropsicologia-adulto.component';
import { NeuropsicologiaPediatricaComponent } from '../preparacion-examenes/consulta/neuropsicologia-pediatrica/neuropsicologia-pediatrica.component';
import { InfiltracionBloqueosComponent } from './consulta/infiltracion-bloqueos/infiltracion-bloqueos.component';
import { AplicacionToxinaComponent } from './consulta/aplicacion-toxina/aplicacion-toxina.component';


const routes: Routes = [
  { path: '', component: PreparacionExamenesComponent },
  { path: 'vtm', component: VtmComponent},
    { path: 'psg', component: PsgComponent },
    { path: 'emg', component: EmgComponent },
    { path: 'eeg', component: EegComponent },
    { path: 'test', component: TestComponent },
    { path: 'pnps', component: PnpsComponent },
    { path: 'potenciales', component: PotencialesComponent },
    { path: 'consulta', component: ConsultaComponent },
     { path: 'fisiatria', component: FisiatriaComponent },
      { path: 'neurologia-adulto', component: NeurologiaAdultoComponent },
      { path: 'neurologia-pediatrica', component: NeurologiaPediatricaComponent },
      { path: 'neuropsicologia-pediatrica', component: NeuropsicologiaPediatricaComponent },
      { path: 'neuropsicologia-adulto', component: NeuropsicologiaAdultoComponent },
      { path: 'infiltracion-bloqueos', component: InfiltracionBloqueosComponent },
      { path: 'aplicacion-toxina', component: AplicacionToxinaComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreparacionExamenesRoutingModule { }
