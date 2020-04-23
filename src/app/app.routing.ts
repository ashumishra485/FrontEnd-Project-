import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactListPageComponent } from './contact-list-page/contact-list-page.component';
import { AddContactPageComponent } from './add-contact-page/add-contact-page.component';
import { ProjectInfoPageComponent } from './project-info-page/project-info-page.component';
import { EditContactPageComponent } from './edit-contact-page/edit-contact-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'contactlist', component: ContactListPageComponent },
  { path: 'addcontact', component: AddContactPageComponent },
  { path: 'infopage', component: ProjectInfoPageComponent },
  {
    path: 'editContact/:outId',
    component: EditContactPageComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
