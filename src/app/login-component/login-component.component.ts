import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  email: string = '';
  password: string = '';
  message: string = '';
  isLoggedIn: boolean = false; // Flag to track login status

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post('/api/v1/admin/login', { email: this.email, password: this.password }, { responseType: 'text' })
      .subscribe(response => {
        if (response === 'Login successful') {
          this.isLoggedIn = true;
          this.router.navigate(['/admin/Admin-Patient-list']);
        } else {
          this.message = response;
        }
      }, error => {
        this.message = 'An error occurred';
      });
  }

  bypassLogin() {
    this.isLoggedIn = true; // Set the login status to true when bypassing
    this.router.navigate(['/admin/Admin-Patient-list']);
  }
}