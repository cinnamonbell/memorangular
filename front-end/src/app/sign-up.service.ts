import { Injectable } from '@angular/core';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }

  signUp(data:User){
    console.log(data.name);
    console.log(data.username);
    console.log(data.password);
  }
}
