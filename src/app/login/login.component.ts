import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { LoginModel } from '../model/login.model';
import { Router } from '@angular/router';
import {tap} from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnDestroy {
  username: string = 'kminchelle';
  password: string = '0lelplR';
  errormessage : string = '';
  obs : any;
  constructor(private authService: AuthService , private router: Router) { 
    
  }
  
  login() {
    this.errormessage = '';
    // this.obs = this.authService.login(this.username, this.password).subscribe((response : LoginModel) => {
    //   localStorage.setItem('token', response.token);
    //   this.router.navigate(['/']);
    // }, (error) => {
    //   this.errormessage = error.error.message;
    // });
    this.obs = this.authService.login(this.username, this.password).subscribe({
      next: (response : LoginModel) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.errormessage = error.error.message;
      }
    })
  }
  ngOnDestroy() {
    if(this.obs) {
      this.obs.unsubscribe();
    }
  }
}
