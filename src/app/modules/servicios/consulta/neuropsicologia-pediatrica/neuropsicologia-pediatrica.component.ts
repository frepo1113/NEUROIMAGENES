import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neuropsicologia-pediatrica',
  templateUrl: './neuropsicologia-pediatrica.component.html',
  styleUrls: ['./neuropsicologia-pediatrica.component.scss']
})
export class NeuropsicologiaPediatricaComponent {

  constructor (private router: Router) {}

  returnServices() {
    this.router.navigate(['/page/servicios/consulta']);
  }

}
