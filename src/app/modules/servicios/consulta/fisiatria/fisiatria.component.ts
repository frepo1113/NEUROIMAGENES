import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fisiatria',
  templateUrl: './fisiatria.component.html',
  styleUrls: ['./fisiatria.component.scss']
})
export class FisiatriaComponent {

  constructor (private router: Router) {}

  returnServices() {
    this.router.navigate(['/page/servicios/consulta']);
  }
}
