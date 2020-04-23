import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoPageComponent } from './project-info-page.component';

describe('ProjectInfoPageComponent', () => {
  let component: ProjectInfoPageComponent;
  let fixture: ComponentFixture<ProjectInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
