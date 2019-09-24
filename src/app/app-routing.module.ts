import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErikComponent } from './erik/erik.component';
import { LasseComponent } from './lasse/lasse.component';


const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent, children: [
    {path: 'erik', component: ErikComponent},
    {path: 'lasse', component: LasseComponent}
  ]},

  { path: '**', component: PageNotFoundComponent }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
