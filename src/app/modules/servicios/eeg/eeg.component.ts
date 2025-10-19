import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eeg',
  templateUrl: './eeg.component.html',
  styleUrls: ['./eeg.component.sass']
})
export class EegComponent {
  constructor(private router: Router) {}
    
  returnServices() {
    this.router.navigate(['/page/servicios']);
  }
}
