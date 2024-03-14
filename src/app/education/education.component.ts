import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  ngOnInit(): void {
    gsap.from('.container', { opacity: 0, duration: 1, stagger: 1, y: 50, top: 90, ease: 'power1.inOut' })
    gsap.from('.container left-container ', { opacity: 1, x: -50,stagger: 1,delay: 1, duration: 1.5 })
    gsap.from('.container right-container ', { opacity: 0, x: 50, stagger: 1, delay: 1, duration: 2 })
    gsap.from('.container left-container ', { opacity: 0, x: -50, stagger: 1, duration: 2.5 })
  }
}
