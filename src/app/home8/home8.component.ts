import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home8',
  templateUrl: './home8.component.html',
  styleUrls: ['./home8.component.css']
})
export class Home8Component implements OnInit {

  constructor(private http:HttpClient) { }
  myData;
  ngOnInit() {
  }
  submit()
  {
    this.http.get("http://localhost:3000/orgadetails").subscribe(
      res => {
        console.log(res);
        localStorage.setItem("jvn", JSON.stringify(res));
        this.myData = JSON.parse(localStorage.getItem("jvn"));
      }
    );
  }

}
