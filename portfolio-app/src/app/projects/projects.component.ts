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
      title: 'SECURE E - COMMERCE WEBSITE ',
      date: 'Jan 2020 - May 2020', 
      technologies: 'HTML ,CSS, JavaScript and React.js',
      description: [
        'Developed a robust e-commerce platform that features optimized product and welcome pages,',
        'leveraging HTML/CSS and JavaScript; increased site speed by 30% and reduced bounce rate by 15%.',
      ]
    },
    
    {
      title: 'Comparative Performance Analysis of XOR-XNOR Function Based High-Speed CMOS Full Adder and Subtractor Circuits ',
      date: 'August 2020 - Dec 2020', 
      technologies: 'LTSPICE',
      description: [
        'VLSI design has always fascinated me, driving my interest in exploring innovative solutions. In a recent project conducted using LT SPICE, I delved into various adder logic styles, including Complementary CMOS, EXOR-EXNOR, and Complementary Pass Transistor Logic. Through meticulous simulation and analysis, I compared crucial metrics such as power consumption, delay, and Power-Delay Product (PDP).',
        'One notable outcome was the realization of adder circuits with a significantly reduced transistor count compared to conventional designs. This not only highlights the efficiency of alternative logic styles but also underscores their potential for practical implementation in VLSI systems.',
      ]
    },
    {
      title: 'Cache Simulation',
      date: 'August 2020 - Dec 2020', 
      technologies: 'Dinero 4',
      description: [
        'In this project, we utilized the Intel PIN tool to generate traces, which were then fed into Dinero for analysis. ',
        'Five distinct benchmark codes were employed to gauge the performance of the cache. Leveraging Dinero 4 cache simulator, we explored the impact of various cache parameters such as block size, associativity, and replacement policies on cache performance. Through rigorous experimentation and analysis, we aimed to gain insights into optimizing cache configurations for enhanced system performance.',
      ]
    },    
    {
      title: 'Hexapod Robot ',
      date: 'Jan 2020 - May 2020', 
      technologies: 'Embedded C ',
      description: [
        'Engineered a Mini-Hexapod utilizing Embedded C and executed comprehensive testing to guarantee flawless functionality.',
        'Enhanced movement precision by 18% while concurrently diminishing errors by 12%.',
      ],
    },
    {
      title: 'Design and Analysis of Fractal Microstrip Antenna ',
      date: 'Oct 2019 - May 2019', 
      technologies: 'ANSYS HFSS',
      description: [
        'Spearheaded a team of 3 to design and analyze a fractal microstrip antenna using ANSYS HFSS, resulting in an award for best project.',
      ],
    },
    {
      title: 'Self-Balancing Robot',
      date: 'Oct 2018 - May 2018', 
      technologies: 'Arduino | Embedded C',
      description: [
        'This project focuses on design, construction and control of a two-wheel self-balancing robot using Arduino. Experimental results show that self-balancing can be achieved with PI-PD control in the vicinity of the upright position.',
      ],
    },
  ]   
  constructor() {}

  ngOnInit(): void {}

}
