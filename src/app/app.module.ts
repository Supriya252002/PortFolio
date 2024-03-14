import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { Router,RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ContactnewComponent } from './contactnew/contactnew.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,

    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    NavbarComponent,
    ContactnewComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [Router],
  bootstrap: [AppComponent]
})
export class AppModule { }
