import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ngstyles',
  imports: [FormsModule, CommonModule],
  templateUrl: './ngstyles.component.html',
  styleUrl: './ngstyles.component.css'
})
export class NGSTYLESComponent {
  // colorVal: string = 'navy';
  // fontSize: string = '20px';
  // italic: string = 'italic';
  
  // applyVal = {
  //   'font-size' : '25px',
  //   color : 'navy',
  //   'font-style' : 'italic',
  //   'font-weight' : 'bold',
  // } learning wala tha ye.

  // task: 

  nm: string = '';
  em: string = '';
  isEmailValid: boolean = false;
  checkEmailValidation(em:string) {
    if(em.includes('@') && em.includes('.com')) {
      this.isEmailValid = true;
    }
  }
}
