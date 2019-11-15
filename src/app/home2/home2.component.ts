import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
onFileSelected(event)
{
  console.log(event);
}
  constructor(private router: Router) { }

  ngOnInit() {
  }
  organizationdata(data)
  {
    console.log(data);
  }
  logout()
  {
    console.log("asdfgh123456789");
    this.router.navigate(['home']);
  }

}
