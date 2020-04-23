import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactPageComponent } from './add-contact-page.component';

describe('AddContactPageComponent', () => {
  let component: AddContactPageComponent;
  let fixture: ComponentFixture<AddContactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
