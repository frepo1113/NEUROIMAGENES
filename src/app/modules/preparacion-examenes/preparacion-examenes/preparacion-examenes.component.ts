import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preparacion-examenes',
  templateUrl: './preparacion-examenes.component.html',
  styleUrls: ['./preparacion-examenes.component.scss']
})
export class PreparacionExamenesComponent {
  
  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate([`/page/preparacion-examenes/${page}`]);
  }
}
