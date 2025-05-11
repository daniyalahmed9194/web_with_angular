import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NGSTYLESComponent } from "./ngstyles/ngstyles.component";
import { SwitchComponent } from "./switch/switch.component";
import { NgcontainerComponent } from "./ngcontainer/ngcontainer.component";
import { NgclassComponent } from "./ngclass/ngclass.component";
import { NgtemplateComponent } from "./ngtemplate/ngtemplate.component";
import { NgtemplateoutletComponent } from "./ngtemplateoutlet/ngtemplateoutlet.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
