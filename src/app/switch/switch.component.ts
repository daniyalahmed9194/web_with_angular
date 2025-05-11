import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch',
  imports: [FormsModule, CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {

  age: number = 0;
  eligibility: boolean = false;
  isElegible(){
    if (this.eligibility=this.age >= 18){

    }
  }
}
