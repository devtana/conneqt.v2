import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContentComponent} from './components/template/content/content.component';
import {FreeTrialComponent} from './views/free-trial/free-trial.component'
import {SignupComponent} from './views/signup/signup.component'

const routes: Routes = [
  {
    path: "",
    component: ContentComponent
  },
  {
    path: "free-trial",
    component: FreeTrialComponent
  },
  {
    path: "signup",
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
