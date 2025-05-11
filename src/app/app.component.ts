import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NGSTYLESComponent } from "./ngstyles/ngstyles.component";
import { SwitchComponent } from "./switch/switch.component";
import { NgcontainerComponent } from "./ngcontainer/ngcontainer.component";
import { NgclassComponent } from "./ngclass/ngclass.component";
import { NgtemplateComponent } from "./ngtemplate/ngtemplate.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, NgtemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
