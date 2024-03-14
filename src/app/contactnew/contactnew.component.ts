import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import gsap from 'gsap';
@Component({
  selector: 'app-contactnew',
  templateUrl: './contactnew.component.html',
  styleUrls: ['./contactnew.component.css']
})
export class ContactnewComponent implements OnInit {
  contactform: FormGroup;
  ngOnInit(): void {
    gsap.from('.container', { opacity: 0, y: -100, duration: 2, ease: 'power1.inOut' })
    gsap.from('.menu', { opacity: 0, x: -100, duration: 1.5 })
    gsap.from('.col-1', { opacity: 0, })

    this.contactform = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      msg: new FormControl(null)
    })
  }

  Onsubmit() {
    console.log(this.contactform.value);
    this.contactform.markAllAsTouched();
  }
}
