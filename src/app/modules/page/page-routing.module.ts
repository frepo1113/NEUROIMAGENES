import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ContenidoComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'equipo-medico',
        loadChildren: () => import('../equipo-medico/equipo-medico.module').then(m => m.EquipoMedicoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
