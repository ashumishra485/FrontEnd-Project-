import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactListPageComponent } from './contact-list-page/contact-list-page.component';
import { AddContactPageComponent } from './add-contact-page/add-contact-page.component';
import { ProjectInfoPageComponent } from './project-info-page/project-info-page.component';
import { HttpClientModule } from '@angular/common/http';
import { EditContactPageComponent } from './edit-contact-page/edit-contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactListPageComponent,
    AddContactPageComponent,
    ProjectInfoPageComponent,
    EditContactPageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
