import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string
  password : string

  constructor(private router: Router){}

  onSubmit() {
    this.router.navigate(['/admin']);
    /*if (this.email === 'admin@example.com' && this.password === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      alert('Invalid credentials');
    }*/
  }

  ngOnInit() {
  }

}
