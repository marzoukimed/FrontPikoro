import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Entity/User';
import { SuserService } from '../Services/suser.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User();
  submitted = false;
  Notsubmited = false;
  constructor(private router: Router, private sUser: SuserService) { }

  ngOnInit(): void {
  }

  Login() {
    this.sUser
    .SignIn(this.user).subscribe(data => {
      console.log(data)
      this.user = new User();
      this.submitted = true;
      this.Notsubmited = false;
      
    }, 
    error => {console.log(error)
    this.Notsubmited = true;
    this.submitted = false;
    }
    );
  }

  onSubmitt() {
    this.Login();    
  }

}
