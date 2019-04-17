import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {
  }

  // define properties for multi step form

  buttonText = "המשך"
  step1: boolean = true
  step2: boolean = false
  step3: boolean = false
  step4: boolean = false

// Here we will take values and console all form value after login 

  onSubmit(form:NgForm) {
    if (this.step4) {
      this.step3 = false
      this.step4 = true
      this.buttonText = "log In"
      console.log(this.userService.selectedUser)
      this.router.navigate(['/welcome'])
    }

    if (this.step3) {
      this.step3 = false
      this.step4 = true
      this.buttonText = "התחבר"
    }
    if (this.step2) {
      this.step1 = false
      this.step2 = false
      this.step3 = true
      this.buttonText = "שלח קוד"
    }
    if (this.step1) {
      this.step2 = true
      this.buttonText = "המשך"
    }

  }

}
