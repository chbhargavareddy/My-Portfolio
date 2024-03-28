import { Component } from '@angular/core';
import { Volunteering } from '../models/models';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.css']
})
export class VolunteeringComponent {
  volunteeringList: Volunteering[] = [
    {
      list: "Sewa International | Assosciated with FEMA",
      date: "June 26, 2023 - July 26, 2026",
      logo: "../../assets/logo.jpeg", // Add the URL for the logo image
      images: [
        "../../assets/certificateWashington.jpg",
        "../../assets/covidvaccine.jpg",
        "../../assets/1.jpg",
        "../../assets/2.jpg",
        "../../assets/3.jpg"
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
