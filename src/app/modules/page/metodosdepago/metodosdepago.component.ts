import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metodosdepago',
  templateUrl: './metodosdepago.component.html',
  styleUrls: ['./metodosdepago.component.scss']
})
export class MetodosdepagoComponent {

  constructor(private router: Router) {}
  
    goToPage(page: string) {
      this.router.navigate([`/page/metodosdepago/${page}`]);
    }

}
