import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalService } from './local.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'forms';

  regForm: FormGroup;

  simpleForm: FormGroup
  get alternateEmails() {
    return this.regForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    console.log(this.alternateEmails)
    this.alternateEmails.push(this.fb.control(''));

  }

  constructor(private fb: FormBuilder, private localStore: LocalService) { }


  ngOnInit(): void {
    this.regForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: [''],
      alternateEmails: this.fb.array([])


    });
  }







}
