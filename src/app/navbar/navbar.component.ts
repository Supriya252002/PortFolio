import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  ngOnInit(){
    gsap.from('.menu',{opacity:0,y:-50,duration:1})
  
  }
}
