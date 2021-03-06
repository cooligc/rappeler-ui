import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  profileForm = new FormGroup({
    firstName: new FormControl('firstName'),
    lastName: new FormControl('lastName'),
    email: new FormControl('lastName')
  });

  ngOnInit() {
  }

}
