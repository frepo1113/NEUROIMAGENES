import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent {

   constructor(private router: Router) {}
      
  returnServices() {
    this.router.navigate(['/page/preparacion-examenes']);
  }
}
