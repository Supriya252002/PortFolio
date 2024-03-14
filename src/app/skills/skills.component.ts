import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  ngOnInit(): void {
    gsap.from('h1', { opacity: 0, y: -50, duration: 1, delay: 1 });
    gsap.from('.card', { opacity: 0, x:-50, delay: 2, duration: 1});
  }

}
