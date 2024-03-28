import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent implements OnInit {
  skills: Skill[] = [
    { name: 'JAVA', level: 'Expert', rating: 80 },
    { name: 'Spring Boot', level: 'Expert', rating: 80 },
    { name: 'Angular', level: 'Expert', rating: 80 },
    { name: 'React.js', level: 'Intermediate', rating: 60 },
    { name: 'HTML, CSS, JS', level: 'Intermediate', rating: 70 },
    { name: 'Python', level: 'Intermediate', rating: 50 },
    { name: 'CI/CD - Concourse | Harness | Jenkins', level: 'Expert', rating: 80 },
    { name: 'Apigee', level: 'Intermediate', rating: 60 },
    { name: 'Cloud - AWS', level: 'Intermediate', rating: 70 },
    { name: 'Unit Testing - Junit | Jasmine | Karma', level: 'Expert', rating: 80 },
  ];

  constructor() {}

  ngOnInit(): void {}

  getBarColorClass(rating: number) {
    if (rating >= 80) {
      return 'bar-green';
    } else if (rating >= 60) {
      return 'bar-yellow';
    } else {
      return 'bar-red';
    }
  }
}
