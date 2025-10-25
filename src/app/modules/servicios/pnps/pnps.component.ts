import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pnps',
  templateUrl: './pnps.component.html',
  styleUrls: ['./pnps.component.scss']
})
export class PnpsComponent {

   constructor(private router: Router) {}
    
  returnServices() {
    this.router.navigate(['/page/servicios']);
  }
}
