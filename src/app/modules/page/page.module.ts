import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HeaderComponent } from './header/header.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MetodosdepagoComponent } from './metodosdepago/metodosdepago.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ContenidoComponent,
    FooterComponent,
    HomeComponent,
    MetodosdepagoComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageModule { }
