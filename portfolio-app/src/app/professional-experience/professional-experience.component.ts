import { Component } from '@angular/core';
import { ProfessionalExperience } from '../models/models';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.css']
})
export class ProfessionalExperienceComponent {
  experiences: ProfessionalExperience[] = [
    {
      title: 'Nationwide Insurance',
      techStack: 'Java | Spring Boot | Angular | Typescript | Concourse | Harness | Rest API |AWS | Postman | TypeScript | Jenkins | New Relic | Pharos',
      date: 'June 2021 - Present ',
      role: 'Full Stack Developer',
      description: [
        'Incorporated Java 8s powerful features like Java Stream API and Lambda Expressions to improve code maintainability and readability; refactored legacy codebase, reducing code complexity by 30% and increasing development efficiency by 25% ',
        'Optimized email delivery by migrating the companys email infrastructure to a REST API-based system; improved email deliverability by 40% and decreased bounce rate by 25% within the first month.',
        'Leveraged Salesforce and Kafka event streaming to develop new features, like bounce back information and delivery status, that Strengthened the user experience. ',
        'Orchestrated AWS Cloud Formation to enable seamless environment provisioning, reducing set-up time from 2 days to 2 hours and reducing infrastructure costs by 25% ',
        'Architected an MFA token generator system using Python; saved the response time to support tickets for login issues by 50% while ensuring compliance with industry standards.',
        'Led the transition to Concourse and Harness from Jenkins for streamlined CI/CD, boosting efficiency and scalability. Implemented robust monitoring using New Relic, Pharos, and Apigee for proactive system performance and enhanced application stability. ',
        'Utilized Contrast and Twistlock to effectively address and remedy vulnerabilities within the work environment.',
      ]
    },
    {
      title: 'University Of North Texas',
      techStack: 'Angular | Jasmine | Karma | Grails | HTML | CSS | JavaScript | Jenkins',
      date: 'January 2021 – June 2021',
      role: 'Software Engineer',
      description: [
        'Developed Static UI pages using Angular and Implemented Template migration from Salesforce to Twilio SendGrid which involved in Html, CSS, JavaScript coding.',
        'Spearheaded the adoption of Test-Driven Development approach to API development and improved code quality by 15%.'
      ]
    },
    // Add more experiences as needed
  ];

  constructor() {}

  ngOnInit(): void {}
}
