import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ngtemplate',
  imports: [CommonModule,FormsModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {
isNameEntered: boolean = false;
// listItems = ['item1', 'item2', 'item3', 'item4'];
Name: string = '';
onNameEntered(event: any) {
  this.isNameEntered = event.target.value !== '';
}
}
