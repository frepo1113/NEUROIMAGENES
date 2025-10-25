import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vtm',
  templateUrl: './vtm.component.html',
  styleUrls: ['./vtm.component.scss']
})
export class VtmComponent {

     constructor(private router: Router) {}
        
    returnServices() {
      this.router.navigate(['/page/preparacion-examenes']);
    }
}
