import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aplicacion-toxina',
  templateUrl: './aplicacion-toxina.component.html',
  styleUrls: ['./aplicacion-toxina.component.scss']
})
export class AplicacionToxinaComponent {

  constructor(private router: Router) {}

  returnServices() {
    this.router.navigate(['/page/preparacion-examenes/consulta']);
  }

}

