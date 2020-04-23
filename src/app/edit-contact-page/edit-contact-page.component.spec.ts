import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactPageComponent } from './edit-contact-page.component';

describe('EditContactPageComponent', () => {
  let component: EditContactPageComponent;
  let fixture: ComponentFixture<EditContactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
