import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // DI - Dependency injection.
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      "username": [''],
      "password": ['']
    })
  }

  public onLoginClick() : void {
    console.log(this.loginForm);  
    
    // If this form is valid - then call the server.
    

  }

}
