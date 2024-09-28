import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string
  password : string
  error : string
  constructor(
    private router: Router,
    private authService: AuthService
  ){}


  onSubmit(event: Event) {
    //event.preventDefault();
    if (!this.email || !this.password) {
      this.error = 'Por favor, complete todos los campos';
      return;
    }
    console.log('inicia');
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/admin']);
      },
      error => {
        console.log(error);
        this.error = 'Login failed';
      }
    );
  }

  ngOnInit() {
  }

}
