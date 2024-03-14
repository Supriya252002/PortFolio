import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';

import gsap from 'gsap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faLinkedin1=faLinkedin;
  fadownarrow=faArrowDownAZ;
  fagithub=faGithub;
  fatelegram=faTelegram;
  faInstagram = faInstagram;
  textToType: string[] = ["Full Stack Developer", "Angular Developer", "Java Developer", "Machine Learning"];
  typedText: string = "";
  currentTextIndex: number = 0;
  ngOnInit(): void {
    gsap.from('.image-container img', { opacity: 0, y: -50, duration: 1, delay: 1, ease: 'power2.inOut' });
    gsap.from('.content h2', { opacity: 0, y: 50, duration: 1, delay: 2, ease: 'power1.in' });
    gsap.from('.content span', { opacity: 0, y: -50, duration: 1, delay: 3 });
    gsap.from('.demo h1', { opacity: 0, x: 50, duration: 1, delay: 4 });
    gsap.from('.text',{opacity:0,x:100,duration:1,delay:5.2});
    gsap.from('.socials', { opacity: 0, x: -50, duration: 1, delay: 5 });
    gsap.from('.button', { opacity: 0, y:100,duration:1});


    this.typedText="Angular Developer";
  }

}