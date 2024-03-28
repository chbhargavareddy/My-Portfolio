import { Component } from '@angular/core';
import { Project } from '../models/models';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'SECURE E-COMMERCE WEBSITE ',
      technologies: 'HTML ,CSS, JavaScript and React.js',
      description: [
        'Developed a robust e-commerce platform that features optimized product and welcome pages,',
        'leveraging HTML/CSS and JavaScript; increased site speed by 30% and reduced bounce rate by 15%.',
      ]
    },
    {
      title: 'Hexapod Robot ',
      technologies: 'Embedded C ',
      description: [
        'Engineered a Mini-Hexapod utilizing Embedded C and executed comprehensive testing to guarantee flawless functionality.',
        'Enhanced movement precision by 18% while concurrently diminishing errors by 12%.',
      ],
    },
    {
      title: 'Design and Analysis of Fractal Microstrip Antenna ',
      technologies: 'ANSYS HFSS',
      description: [
        'Spearheaded a team of 3 to design and analyze a fractal microstrip antenna using ANSYS HFSS, resulting in an award for best project.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

}
