import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactnewComponent } from './contactnew/contactnew.component';
import { ContactComponent } from './contact/contact.component';


  //Define Routes

  const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'skills',component:SkillsComponent},
    {path:'education',component:EducationComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'contactnew',component:ContactnewComponent},
    {path:'contact',component:ContactComponent},

//Wildcard Path

    {path:'**',redirectTo:''}
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

