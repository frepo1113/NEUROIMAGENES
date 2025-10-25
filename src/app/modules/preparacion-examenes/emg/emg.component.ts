import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emg',
  templateUrl: './emg.component.html',
  styleUrls: ['./emg.component.scss']
})
export class EmgComponent {

   constructor(private router: Router) {}
      
  returnServices() {
    this.router.navigate(['/page/preparacion-examenes']);
  }
}
