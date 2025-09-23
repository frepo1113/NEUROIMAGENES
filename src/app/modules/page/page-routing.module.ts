import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { HomeComponent } from './home/home.component';
import { ContactenosComponent } from './contactenos/contactenos.component';

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
        path: 'contactenos',
        component: ContactenosComponent
      },
      {
        path: 'equipo-medico',
        loadChildren: () => import('../equipo-medico/equipo-medico.module').then(m => m.EquipoMedicoModule)
      },
      {
        path: 'nosotros',
        loadChildren: () => import('../nosotros/nostros.module').then(m => m.NostrosModule)
      },
      {
        path: 'servicios',
        loadChildren: () => import('../servicios/servicios.module').then(m => m.ServiciosModule)
      },
      {
        path: 'preparacion-examenes',
        loadChildren: () => import('../preparacion-examenes/preparacion-examenes.module').then(m => m.PreparacionExamenesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
