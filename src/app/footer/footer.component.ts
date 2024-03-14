import { Component,OnInit} from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  ngOnInit(): void {
      gsap.from(".footer",{opacity:0,y:50,duration:2.5,stagger:2})
  }

}
