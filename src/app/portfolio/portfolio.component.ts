import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  nm = '';
  em = '';
  ph = '';
  ad = '';
  submitted:boolean = false;
  qualifications = [{ degree: '', school: '', year: '' }];

  addQuallification() {
    this.qualifications.push({ degree: '', school: '', year: '' });
  }

  onSubmit() {  
    this.submitted = true;
  }
  onEdit() {
    this.submitted = false;
  }
}
