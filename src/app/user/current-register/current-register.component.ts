import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-current-register',
  templateUrl: './current-register.component.html',
  styleUrls: ['./current-register.component.css']
})
export class CurrentRegisterComponent implements OnInit {
  email = new FormControl('', [ Validators.required, Validators.email, ]);
  password = new FormControl('', [ Validators.required, ]);

  registerForm = new FormGroup({
    email: this.email,
    password: this.password,
  })

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
  }

  register() {
    this.currentUserService.register(this.email.value, this.password.value);
  }

}
