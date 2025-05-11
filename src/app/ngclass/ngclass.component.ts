import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngclass',
  imports: [CommonModule],
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.css'
})
export class NgclassComponent {
// updateStyles: any = 'updateStyles';

// hasText : boolean = false;
// onInput(e: any){
//   this.hasText = e.target.value !== '';
//}

colorMode: string = 'lightMode';
toggleMode(){
   if(this.colorMode === 'lightMode'){
     this.colorMode = 'darkMode';
   }
   else{
     this.colorMode = 'lightMode';
   }
}
}
