import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/classes/user';
import { UserAuthenticationService } from 'app/services/user-authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userRegForm = {} as FormGroup;
  validMessage: string = "";
  errorMessage: string = "";
  users = {} as User;
  taken: boolean = false;
  takenPassword: boolean = false;
  submitted: boolean = false;

  constructor(private userAuth: UserAuthenticationService, private router: Router) { }

  registrationForm() {
    this.userRegForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9\.\-\_]+@([a-z0-9\-\_]+\.)+[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required]),
      password_repeat: new FormControl('', [Validators.required])
    });
  }

  addUser() {
    this.userAuth.readAllUsers().subscribe(
      (data: User[]) => {
        const user = data.find((u: User) =>
          u.email == this.userRegForm.value.email)
        if (user) {
          this.errorMessage = "Email is already taken";
          this.validMessage = "";
          this.taken = true;
          console.log("Email is already taken " + this.taken)
        }
        else {
          this.validMessage = "";
          this.errorMessage = "";
          if (this.userRegForm.valid && this.userRegForm.value.password == this.userRegForm.value.password_repeat) {
            this.validMessage = "You have successfully registered!";
            this.errorMessage = "";
            this.takenPassword = false;
            this.submitted = true;
            this.userAuth.createUser(this.userRegForm.value).subscribe(
              (data) => {
                this.userRegForm.reset();
                console.log(data);
              },
              (error) => {
                console.log(error)
              })
            // this.router.navigate(['/log-in']);
          }
          else {
            this.takenPassword = true;
            this.errorMessage = "";
            this.validMessage = "";
          }
        }
      }
    )
  }


  ngOnInit(): void {
    this.registrationForm();
  }

}
