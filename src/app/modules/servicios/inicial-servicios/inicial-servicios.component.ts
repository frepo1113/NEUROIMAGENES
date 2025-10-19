import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial-servicios',
  templateUrl: './inicial-servicios.component.html',
  styleUrls: ['./inicial-servicios.component.scss']
})
export class InicialServiciosComponent {

  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([`/page/servicios/${page}`]);
  }
}
