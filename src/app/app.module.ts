import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ErikComponent } from './erik/erik.component';
import { LasseComponent } from './lasse/lasse.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    PageNotFoundComponent,
    ErikComponent,
    LasseComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
