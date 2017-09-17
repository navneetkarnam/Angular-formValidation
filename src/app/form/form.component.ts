import { Component, OnInit } from '@angular/core';
import {FormServiceService} from '../form-service.service';
import {user} from "../user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  states = ['NY', 'AZ', 'MA', 'CA', 'CT', 'MD', 'FL', 'AL'];
  user: user = {
    firstName: null,
    lastName: null,
    address: null,
    phone: null,
    city: null,
    state: null,
    zip: null
};
  constructor(private userService: FormServiceService) { }

  ngOnInit() {
  }

  addUser() {
    this.userService.addUser(this.user);
  }

}
