import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErikComponent } from './erik/erik.component';
import { LasseComponent } from './lasse/lasse.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PortalComponent } from './portal/portal.component';
import { FindALiftComponent } from './find-a-lift/find-a-lift.component';


const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, children: [
    {path: 'login', component: LoginComponent},  
    {path: 'register', component: RegisterComponent},  
    {path: 'contact', component: ContactComponent, children: [
      {path: 'erik', component: ErikComponent},
      {path: 'lasse', component: LasseComponent}
    ]},  
  ]},
  {path: 'portal', component: PortalComponent, children: [
    {path: 'findalift', component: FindALiftComponent}
  ]},

  { path: '**', component: PageNotFoundComponent }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
