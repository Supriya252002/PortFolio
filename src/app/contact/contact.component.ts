import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import gsap from 'gsap';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // contactform: FormGroup = new FormGroup(inject);

  // ngOnInit(): void {
  //   gsap.from('.container', { opacity: 0, y: -100, duration: 2, ease: 'power1.inOut' })
  //   gsap.from('.menu', { opacity: 0, x: -100, duration: 1.5 })
  //   gsap.from('.col-1', { opacity: 0, })

  //   this.contactform = new FormGroup({
  //     name: new FormControl(null),
  //     email: new FormControl(null),
  //     phone: new FormControl(null),
  //     msg: new FormControl(null)
  //   })

  // }
  // Onsubmit() {
  //   console.log(this.contactform.value);
  //   this.contactform.markAllAsTouched();
  // }
  ngOnInit(): void {
    gsap.from('.achievement', { opacity: 0, x: -200, duration: 1 })
  }

}
