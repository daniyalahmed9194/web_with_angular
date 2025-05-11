import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ngtemplateoutlet',
  imports: [CommonModule],
  templateUrl: './ngtemplateoutlet.component.html',
  styleUrl: './ngtemplateoutlet.component.css',
})
export class NgtemplateoutletComponent {
  // a: number = 10;
  // b: number = 20;
  // cal() {
  //   return this.a + this.b;
  // }

  emplooyes = [
    { id: 1, name: 'abdul', salary: 2000000 },
    { id: 2, name: 'ali', salary: 50000000 },
    { id: 3, name: 'gmd', salary: 10000000 },
  ];
}
