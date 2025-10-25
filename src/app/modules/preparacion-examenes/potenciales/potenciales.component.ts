import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-potenciales',
  templateUrl: './potenciales.component.html',
  styleUrls: ['./potenciales.component.scss']
})
export class PotencialesComponent {

     constructor(private router: Router) {}
        
    returnServices() {
      this.router.navigate(['/page/preparacion-examenes']);
    }
}
