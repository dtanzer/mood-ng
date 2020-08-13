import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurrentUserService } from '../current-user.service';

@Component({
	selector: 'app-current-login',
	templateUrl: './current-login.component.html',
	styleUrls: ['./current-login.component.css']
})
export class CurrentLoginComponent implements OnInit {
	@ViewChild(NgForm) loginForm?: NgForm;
	email: string='';
	password: string='';
	
	constructor(private currentUserService: CurrentUserService) { }

	ngOnInit(): void {
	}

	onSubmit(): void {
		this.currentUserService.login(this.email, this.password);
	}
}
