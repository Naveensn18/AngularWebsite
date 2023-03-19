import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BikeserviceComponent } from './bikeservice/bikeservice.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"BikeService",component:BikeserviceComponent},
  {path:"Home",component:HomepageComponent},
  {path:"About",component:AboutusComponent},
  {path:"",component:HomepageComponent},
  {path:"Contact",component:ContactusComponent},
  {path:"Login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
