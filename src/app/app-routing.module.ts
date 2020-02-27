import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { Home4Component } from './home4/home4.component';
import { Home8Component } from './home8/home8.component';
import { FundingsComponent } from './fundings/fundings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home4',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home2',
    component: Home2Component
  },
  {
    path: 'home4',
    component: Home4Component
  },
  {
    path: 'home8',
    component: Home8Component
  },
  {
    path :'fundings',
    component: FundingsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, Home2Component];