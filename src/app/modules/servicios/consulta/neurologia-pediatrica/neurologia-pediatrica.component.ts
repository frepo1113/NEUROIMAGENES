import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neurologia-pediatrica',
  templateUrl: './neurologia-pediatrica.component.html',
  styleUrls: ['./neurologia-pediatrica.component.scss']
})
export class NeurologiaPediatricaComponent {
  
  constructor (private router: Router) {}

  returnServices() {
    this.router.navigate(['/page/servicios/consulta']);
  }
}
