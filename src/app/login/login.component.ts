import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  // DI - Dependency injection.
  constructor(private fb: FormBuilder, private router: Router, 
    private auth: AuthService) { }

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
      // And if login successful
      console.log("In login");
      this.auth.login().subscribe(result => {
      
        this.router.navigate(['portal']);  
      });    
      

    } else {
      console.log("Cant. Must fix form errors first");
    }


  }

}
