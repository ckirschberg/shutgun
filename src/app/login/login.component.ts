import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      "username": ['', [Validators.required, Validators.minLength(3)]],
      "password": ['', Validators.required]
    })
  }

  public onLoginClick() : void {
    console.log(this.loginForm);  
    

    // If this form is valid - then call the server.
    if (this.loginForm.valid) {
      // Then call the server
    } else {
      console.log("Cant. Must fix form errors first");
    }


  }

}
