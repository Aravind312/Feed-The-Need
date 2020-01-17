import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.css']
})
export class Home4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  submit4()
  {
    this.router.navigate(['home'])
  }
  submit8()
  {
    this.router.navigate(['home8'])
  }

}
