import { Component } from '@angular/core';
import { Certifications } from '../models/models';
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
    certificationsList: Certifications[] = [
    {
      list: "AWS Certified Solutions Architect – Associate",
      date:"May 26, 2023 - May 26, 2026",
      link:"https://www.credly.com/badges/1c4c4929-28a8-46a1-aac5-e55153ce60a0/linked_in_profile",
      image: "../../assets/AWSimage.png",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
