import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SummaryComponent } from './summary/summary.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ResponsivePcOrWebDirective } from './directives/responsive-pc-or-web.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SummaryComponent,
    TechnicalSkillsComponent,
    ProfessionalExperienceComponent,
    EducationComponent,
    CertificationsComponent,
    ProjectsComponent,
    ContactComponent,
    ResponsivePcOrWebDirective,
    NavbarComponent,
    VolunteeringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
