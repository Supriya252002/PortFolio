import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{

  ngOnInit(): void {
      gsap.from('h1',{opacity:0,y:-50,duration:1,delay:0.5});
      gsap.from('.card',{opacity:0,y:50,duration:1,delay:1})
  }
}
