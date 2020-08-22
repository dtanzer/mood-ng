import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-current-register',
  templateUrl: './current-register.component.html',
  styleUrls: ['./current-register.component.css']
})
export class CurrentRegisterComponent implements OnInit {
  email = new FormControl('', [ Validators.required, Validators.email, ]);
  password = new FormControl('', [ Validators.required, ]);
  confirmPassword = new FormControl('', [ Validators.required, ]);

  registerForm = new FormGroup({
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,
  }, this.validateConfirmedPassword() )

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
  }

  register() {
    this.currentUserService.register(this.email.value, this.password.value);
  }

  validateConfirmedPassword(): ValidatorFn {
    return (group) => {
      if(group.get('password') == null || group.get('confirmPassword') == null) {
        return { passwordOrConfirmPasswordMissing: true, };
      }
      if(group.get('password')?.value === group.get('confirmPassword')?.value) {
        return null;
      }
      return { confirmedPasswordMismatch: true, };
    }
  }
}
