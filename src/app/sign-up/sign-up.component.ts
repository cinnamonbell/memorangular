import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { SignUpService } from 'src/app/sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public signUpService:SignUpService, private router:Router) { }

  ngOnInit(): void {
  }


  onClickSubmit(data) {

    let user:User = new User();
    
    user.name = data.name;
    user.username = data.username;
    user.password = data.password;

    this.signUpService.signUp(user);
    this.router.navigate(['/']);
 }

}
