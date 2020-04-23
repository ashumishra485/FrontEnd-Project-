import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'providers/authentication.service';
import { ConfigService } from 'providers/config/config.service';
import { first } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.css']
})
export class ContactListPageComponent implements OnInit {

  displayImage = false;
  showDialog = false;
  goalToDelete = '';
  userId = '';
  savingGoal: any;
  savingGoalData: any;
  noDocuments = false;
  allSavingGoal: Array<any> = [];
  idToDelete;

  constructor(
    private _authService: AuthenticationService,
    private router: Router,
    private configService: ConfigService
  ) { }



  ngOnInit(): void {
    this.getAllContact();
  }


  async getAllContact() {
    this.savingGoal = [];
    this.allSavingGoal = [];
    await this._authService.getAllContacts()
      .pipe(first()).subscribe(async newData => {
        // if (!newData) {
        console.log('newData', newData);
        //   this.noDocuments = true;
        // } else {
        // this.noDocuments = false;
        this.savingGoalData = newData;

        this.savingGoalData.forEach(i => {
          this.allSavingGoal.push({
            id: i.id,
            firstName: i.firstName,
            lastName: i.lastName,
            address: i.address,
            fullName: i.fullName,
            phone: i.phone,
            phonetype: i.phonetype,
          })
          console.log('this.allDocuments', this.allSavingGoal);
        });
      }, err => {
        console.log('error');
      })
  }


  AddContact() {
    this.router.navigateByUrl('addcontact');
  }


  toggleDelete(id: string) {
    this.showDialog = true;
    this.idToDelete = id;
  }

  async deleteDocument() {
    this._authService.deleteContact(this.idToDelete).subscribe(async newData => {
      // this.toggle();
      await Toast.show({
        text: 'Contact Deleted!'
      });
      this.showDialog = false;
      this.getAllContact();
    }, err => {
      console.log('error');
    });
  }
}
