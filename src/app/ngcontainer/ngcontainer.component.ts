import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngcontainer',
  imports: [CommonModule],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.css',
})
export class NgcontainerComponent {
  subjectList = [
    { //subCode: 101,
       name: 'C++' },
    { subCode: 102, name: 'Java' },
    { subCode: 103, name: 'Python' },
    { subCode: 104, name: 'JavaScript' },
  ];
}
