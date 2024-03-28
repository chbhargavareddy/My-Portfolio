import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { SummaryComponent } from './summary/summary.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'technical-skills', component: TechnicalSkillsComponent },
  { path: 'professional-experience', component: ProfessionalExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
