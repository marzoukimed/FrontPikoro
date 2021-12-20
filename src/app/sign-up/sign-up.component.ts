import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Entity/User';
import { SuserService } from '../Services/suser.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  User: { 
    id: number | undefined ;
Name: string | undefined ;
lastName: string | undefined ;
Photo: any | undefined ;
email: string | undefined ;
password: string | undefined ;
 };





 submitted = false;
  evev: any;
  user= new User();
  constructor(private router: Router, private sUser: SuserService,private http: HttpClient) { 
    this.User = {
      id:0,
      Name: "",
      lastName:"",
      Photo:null,
      email: "",
      password: ""
  };
  }

  ngOnInit(): void {
  }

  upload(event: any) {
    this.evev = event
  }
  
  save() {
 
    const file = this.evev.target.files[0];
    const formdata = new FormData();
    formdata.append("avatar", file);
 
    //l'apload de l'image
    this.http.post('http://localhost:3000/user/file', formdata).subscribe(
      (d) => {
        console.log(d);
      },
      (error) => {
        console.error(error);
      }
    );

    //persist de l'objet user 
    this.sUser
    .SignUp(this.user).subscribe((data) => {     
      console.log(this.user)
      this.submitted = true;
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.save();    
  }

  



}
