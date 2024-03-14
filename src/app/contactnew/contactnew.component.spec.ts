import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactnewComponent } from './contactnew.component';

describe('ContactnewComponent', () => {
  let component: ContactnewComponent;
  let fixture: ComponentFixture<ContactnewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactnewComponent]
    });
    fixture = TestBed.createComponent(ContactnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
