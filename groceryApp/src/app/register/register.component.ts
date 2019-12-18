import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault();

    const target = event.target;
    const errors = [];
    const firstName = target.querySelector('#firstName').value;
    const lastName = target.querySelector('#lastName').value;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    const cpassword = target.querySelector('#cpassword').value;

    if (password !== cpassword) {
      errors.push('Passwords do not match');
    }

    // temp

    if (errors.length == 0) {
      this.Auth.registerUser(firstName, lastName, username, password).subscribe(data => {
        console.log(data);
        if (data.success) {
          this.router.navigate(['dashboard']);
        }
      });
    }
  }
}
