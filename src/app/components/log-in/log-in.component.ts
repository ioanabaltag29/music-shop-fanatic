import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/classes/user';
import { UserAuthenticationService } from 'app/services/user-authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logInForm: FormGroup;
  logInMessage: string = '';
  userLogged: boolean = false;
  errorMessage: boolean = false;

  constructor(private logInService: UserAuthenticationService, private router: Router) { }

  logInFormFunction() {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  readAllUsersFunction() {
    return this.logInService.readAllUsers().subscribe(
      (data: User[]) => {
        const user = data.find((u: User) =>
          u.email == this.logInForm.value.email && u.password == this.logInForm.value.password)
        if (user) {
          alert("Logged In successfully");
          user.logged_in = true;
          this.logInForm.reset();
          this.router.navigate(["/store"]);
          console.log(user);
          this.userLogged = true;
          localStorage.setItem('currentUser', this.logInForm.value.email);
          this.router.navigate(['/store']);
          // window.location.reload();

        }
        else {
          this.logInMessage = "Wrong email or password. Try again";
          this.errorMessage = true;
        }
      },
      (error) => {
        console.log("No data found " + error);
      }
    )
  }

  ngOnInit(): void {
    this.logInFormFunction();
  }

}
