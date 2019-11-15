import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

declare const gapi: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userlogin: FormGroup;

  constructor(private router: Router, private http: HttpClient,private formBuilder:FormBuilder
  ) { }
  ngOnInit() {
    this.userlogin=this.formBuilder.group({
      name:['',],
      password:['',]
    });
  }
  Submitlogin(data2)
  {
    console.log(data2);
    this.http.post("http://localhost:3000/signin", data2).subscribe(dat=> {
      if (dat) {
        console.log(dat);
        if(dat==true)
        {
          console.log("true");
          this.router.navigate(['home2']);
        }
      }
      else
      {
        console.log("false");
      }
    });



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
        this.a = 'Token || ' + googleUser.getAuthResponse().id_token;
        console.log(this.a);
        this.x = 'ID: ' + profile.getId();
        this.y = 'Name: ' + profile.getName();
        this.z = 'Image URL: ' + profile.getImageUrl();
        this.w = 'Email: ' + profile.getEmail();
        console.log(this.x, this.y, this.z)
        this.router.navigate(['home2']);
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
  ngAfterViewInit() {
    this.googleInit();
  }

  /*userid;
  pass;
  logi(userid:any,password:any) :void
  {
    this.userid=userid;
    this.pass=password;
    console.log(this.userid,this.pass);
    
    let  da={"name":this.userid,"password":this.pass};
    console.log(da);
    this.http.post("http://localhost:3000/signin",{param1:this.userid,param2:this.pass}).subscribe(
      ress => {
        console.log(ress);
      }
    );
  }*/
 /*onSubmit(loginform): void {
    //this.ssa = loginuser;
    //this.aas = pass;
    //let data8= { "name": this.ssa, "password": this.aas };
    console.log(loginform);
  /*  this.http.get("http://localhost:3000/signup", data8).subscribe(
      ress => {
        console.log(ress);
      }
    );*/
  //}
  ss;
  aa;
  s;
  b;
  c;
  d;
  e;
  cusname;
  cusemail;
  custpass;
  custphone;
  custrepass;
  subm(name: String, email: String, phonenumber: String, password: String, reetpassword: String): void {
    this.s = name;
    this.b = email;
    this.c = password;
    this.d = reetpassword;
    this.e = phonenumber;
    // var data = ({
    //   signupdetailes: JSON.stringify({
    //      name,
    //      email,
    //      phonenumber
    //   })
    // });
    var data = { "name": this.s, "email": this.b, "password": this.e, "phone_number": this.c };
    console.log(data);
    this.http.post("http://localhost:3000/signup", data).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}