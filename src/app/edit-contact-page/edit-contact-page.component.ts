import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'providers/authentication.service';
import { Plugins } from '@capacitor/core';
import { first } from 'rxjs/operators';
const { Toast } = Plugins;

@Component({
  selector: 'app-edit-contact-page',
  templateUrl: './edit-contact-page.component.html',
  styleUrls: ['./edit-contact-page.component.css']
})
export class EditContactPageComponent implements OnInit {
  formData: any = new FormData();
  editcontactForm: FormGroup;
  selectedContactId;
  constructor(
    private _authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    public activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.editcontactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      phonetype: ['', Validators.required],

    });
    this.selectedContactId = this.activatedRoute.snapshot.paramMap.get('outId');
    console.log('this.selectedContactId', this.selectedContactId);
    this.getSelectedSavingGoal();
  }


  async getSelectedSavingGoal() {
    await this._authService.getSelectedContact(this.selectedContactId)
      .pipe(first()).subscribe(async newData => {
        console.log('newData in getsaving', newData); 
        this.editcontactForm.setValue({
          firstName: newData.firstName,
          lastName: newData.lastName,
          email: newData.email,
          address: newData.address,
          phone: newData.phone,
          phonetype: newData.phonetype,
        });
      }, err => {
        console.log('Error !');
      }
      );
  }
  get f() { return this.editcontactForm.controls; }
  navBack(){
    this.router.navigateByUrl('contactlist');
  }
  async onSubmit() {

    let formData: any = new FormData();
    
     formData = {
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      email: this.f.email.value,
      address: this.f.address.value,
      phone: this.f.phone.value,
      phonetype: this.f.phonetype.value,
    };

    await this._authService.editContact(this.selectedContactId, formData)
      .subscribe(async response => {
        await Toast.show({
          text: 'Saving Updated!'
        });
        this.router.navigateByUrl('landing');
      },
        async err => {
          console.log('Error in creating expense');
          await Toast.show({
            text: 'Error !'
          });

        })
  }

}
