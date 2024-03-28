import { Component } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
    educationList: Education[] = [
    {
      institute: "University Of North Texas",
      course: 'Masters of Science in Computer Engineering',
      place: 'Denton,Texas',
      duration: '2020-2021',
    },
    {
      institute: "Kakatiya Institution Of Technology And Science",
      course: 'Bachelors of Technology in Electronics and Communication Engineering',
      place: 'Warangal,India',
      duration: '2015-2019',
    },
    
  ];

  constructor() {}

  ngOnInit(): void {}

}
