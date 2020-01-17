import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  //selectedFile = null;
  //onFileSelected(event) {
    //this.selectedFile = event.target.files[0];
  //}
  constructor(private router: Router,private http:HttpClient) { }

  ngOnInit() {
  }
  organizationdata(data8) {
    console.log(data8);
    this.http.post("http://localhost:3000/orga", data8).subscribe(
      res => {
        console.log("sucess");
      }
    );
   /* this.http.post("http://localhost:3000/organ", data).subscribe(
      res => {
        console.log(res);
      }
    );*/
   // const fd = new FormData();
   // fd.append('image', this.selectedFile, this.selectedFile.name);
   // console.log(fd);
  }
  logout() {
    console.log("asdfgh123456789");
    this.router.navigate(['home']);
  }

}
