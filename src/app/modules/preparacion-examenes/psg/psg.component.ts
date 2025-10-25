import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psg',
  templateUrl: './psg.component.html',
  styleUrls: ['./psg.component.scss']
})
export class PsgComponent {

    constructor(private router: Router) {}
      
  returnServices() {
    this.router.navigate(['/page/preparacion-examenes']);
  }
}
