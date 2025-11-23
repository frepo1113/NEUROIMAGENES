import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neurologia-adulto',
  templateUrl: './neurologia-adulto.component.html',
  styleUrls: ['./neurologia-adulto.component.scss']
})
export class NeurologiaAdultoComponent {

   constructor (private router: Router) {}

  returnServices() {
    this.router.navigate(['/page/servicios/consulta']);
  }
}
