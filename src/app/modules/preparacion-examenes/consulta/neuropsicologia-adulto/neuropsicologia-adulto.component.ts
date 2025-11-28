import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neuropsicologia-adulto',
  templateUrl: './neuropsicologia-adulto.component.html',
  styleUrls: ['./neuropsicologia-adulto.component.scss']
})
export class NeuropsicologiaAdultoComponent {

  constructor (private router: Router) {}
    
      returnServices() {
        this.router.navigate(['/page/preparacion-examenes/consulta']);
      }

}
