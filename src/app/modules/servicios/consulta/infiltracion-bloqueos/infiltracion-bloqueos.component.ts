import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infiltracion-bloqueos',
  templateUrl: './infiltracion-bloqueos.component.html',
  styleUrls: ['./infiltracion-bloqueos.component.scss']
})
export class InfiltracionBloqueosComponent {

    constructor (private router: Router) {}

  returnServices() {
    this.router.navigate(['/page/servicios/consulta']);
  }

}
