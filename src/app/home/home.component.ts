import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
declare const gapi: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public auth2: any;
  a;
  x;
  y;
  z;
  w;
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '837249048451-j3aaqrrm5aprd5rr456k2dcmknv4evb0.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        this.a='Token || ' + googleUser.getAuthResponse().id_token;
        console.log(this.a);
        this.x='ID: ' + profile.getId();
        this.y='Name: ' + profile.getName();
        this.z='Image URL: ' + profile.getImageUrl();
        this.w='Email: ' + profile.getEmail();
        this.router.navigate(['home2']);
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

ngAfterViewInit(){
      this.googleInit();
}
s;
b;
c;
d;
subm(name:String,email:String,password:String,reetpassword:String)
{
  this.s=name;
  this.b=email;
  this.c=password;
  this.d=reetpassword;
  if(this.c==this.d)
  {
    console.log(this.s);
    console.log(this.b);
    console.log(this.c);
    console.log(this.d);
  } 
  else
  {
    console.log("error");
  }
}      
}
