import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {
    gsap.from(".heading", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".image", { opacity: 0, x: -50, duration: 1, delay:1});
    gsap.from(".content", { opacity: 0, x: 50, duration: 1, delay: 2});
    gsap.from(".resumebtn", { opacity: 0, y: 50, duration: 1, delay:3});
    gsap.from('.btn1',{opacity:0,y:-50,duration:1,delay:4});
  }
  
}


