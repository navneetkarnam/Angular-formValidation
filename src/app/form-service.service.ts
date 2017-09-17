import { Injectable } from '@angular/core';
import {user} from "./user";

@Injectable()
export class FormServiceService {
  users: user[] = [];
  constructor() { }
  addUser(usernew):  void {
    this.users.push(usernew);
    console.log(this.users);

  }
}
