import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactbook',
  templateUrl: './contactbook.component.html',
  styleUrls: ['./contactbook.component.scss']
})
export class ContactbookComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { 
    this.contactFormArray=this.formBuilder.array([
      this.formBuilder.group({
        firstName: new FormControl("John",Validators.required),
        lastName: new FormControl("Doe", Validators.required),
        email: new FormControl("example@gmail.com"),
      })
    ]);
  }

  contactFormArray:any;
  listOfContacts:any=[];

  ngOnInit(): void {
  }

  addNewFormToFormArray(){
    this.contactFormArray.push(this.formBuilder.group({
      firstName: new FormControl("John",Validators.required),
      lastName: new FormControl("Doe", Validators.required),
      email: new FormControl("example@gmail.com"),
    }));
  }

  saveContact(){
    //console.log(this.contactFormArray.value);

    let latestContact = this.contactFormArray.at(this.contactFormArray.length-1);
    //this.listOfContacts=[...this.listOfContacts,...this.contactFormArray.value];

    this.listOfContacts=[...this.listOfContacts,latestContact.value];
    /*
    this.contactFormArray=this.formBuilder.array([
      this.formBuilder.group({
        firstName: new FormControl("John",Validators.required),
        lastName: new FormControl("Doe", Validators.required),
        email: new FormControl("example@gmail.com"),
      })
    ]);
    */
  }

  removeContact(contact){
    this.listOfContacts.splice(this.listOfContacts.indexOf(contact),1);
  }

}
