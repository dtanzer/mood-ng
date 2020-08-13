import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentLoginComponent } from './current-login.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CurrentUserService } from '../current-user.service';
import { Mock, mock, instance, when, verify } from 'omnimock';

describe('CurrentLoginComponent', () => {
	let component: CurrentLoginComponent;
	let fixture: ComponentFixture<CurrentLoginComponent>;
	let currentUserService: Mock<CurrentUserService>;

	beforeEach(async(() => {
		currentUserService = mock<CurrentUserService>('currentUserService');
		
		TestBed.configureTestingModule({
			declarations: [ CurrentLoginComponent, ],
			imports: [ FormsModule, ],
			providers: [
				{ provide: CurrentUserService, useValue: instance(currentUserService)},
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CurrentLoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('has an input to enter the user name, password field and submit button', () => {
		fixture.whenStable().then(() => {
			const userNameInput = fixture.debugElement.query(By.css('input[name="email"]'));
			expect(userNameInput).toBeTruthy();
			expect(userNameInput.nativeElement.type).toBe('text');

			const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
			expect(passwordInput).toBeTruthy();
			expect(passwordInput.nativeElement.type).toBe('password');

			const submitButton = fixture.debugElement.query(By.css('input[name="submit"]'));
			expect(submitButton).toBeTruthy();
			expect(submitButton.nativeElement.type).toBe('submit');
			expect(submitButton.nativeElement.value).toBe('Login');
		});
	});

	it('sends the entered form values to a login service on submit', async(() => {
		when(currentUserService.login('molly@example.com', '12345')).return().once();

		fixture.whenStable().then(() => {
			component.loginForm?.controls['email'].setValue('molly@example.com');
			component.loginForm?.controls['password'].setValue('12345');

			fixture.debugElement.query(By.css('input[name="submit"]')).nativeElement.click();
			fixture.detectChanges();

			verify(currentUserService);
		});
	}));

	const invalidInputs: string[][] = [['', 'pass'], ['user', 'pass'], ['user@host.', 'pass'], ['user@host.com', '']]
	invalidInputs.forEach(([email, password]) => it('has a disabled send button when the input is not valid', async(() => {
		fixture.whenStable().then(() => {
			component.loginForm?.controls['email'].setValue(email);
			component.loginForm?.controls['password'].setValue(password);

			fixture.detectChanges();

			const submitButton = fixture.debugElement.query(By.css('input[name="submit"]'));
			expect(submitButton.nativeElement.disabled).toBe(true);
		});
	})));

	it('has a enabled send button when the input is valid', async(() => {
		fixture.whenStable().then(() => {
			component.loginForm?.controls['email'].setValue('user@host.com');
			component.loginForm?.controls['password'].setValue('password');

			fixture.detectChanges();

			expect(component.loginForm?.valid).toBeTruthy();

			fixture.whenStable().then(() => {
				const submitButton = fixture.debugElement.query(By.css('input[name="submit"]'));
				expect(submitButton.nativeElement.disabled).toBe(false);
			});
		});
	}));

	it('has a validation message when email is empty', async(() => {
		fixture.whenStable().then(() => {
			component.loginForm?.controls['email'].setValue('');
			fixture.detectChanges();

			expect(fixture.debugElement.queryAll(By.css('p')).length).toBeGreaterThanOrEqual(1);
			expect(fixture.debugElement.queryAll(By.css('p'))
				.filter(p => p.nativeElement.textContent==='Email is required')
				.length).toEqual(1);
		});
	}));
	it('does not a validation message about email length when not empty', async(() => {
		fixture.whenStable().then(() => {
			component.loginForm?.controls['email'].setValue('user');
			fixture.detectChanges();

			expect(fixture.debugElement.queryAll(By.css('p'))
				.filter(p => p.nativeElement.textContent==='Email is required')
				.length).toEqual(0);
		});
	}));

	it('has a validation message when email invalid', async(() => {
		fixture.whenStable().then(() => {
			component.loginForm?.controls['email'].setValue('user@host.');
			fixture.detectChanges();

			expect(fixture.debugElement.queryAll(By.css('p')).length).toBeGreaterThanOrEqual(1);
			expect(fixture.debugElement.queryAll(By.css('p'))
				.filter(p => p.nativeElement.textContent==='Email must be a valid email address')
				.length).toEqual(1);
		});
	}));
	it('does not a validation message about email validity when valid', async(() => {
		fixture.whenStable().then(() => {
			component.loginForm?.controls['email'].setValue('user@host.com');
			fixture.detectChanges();

			expect(fixture.debugElement.queryAll(By.css('p'))
				.filter(p => p.nativeElement.textContent==='Email must be a valid email address')
				.length).toEqual(0);
		});
	}));

	it('has a validation message when password is empty', async(() => {
		fixture.whenStable().then(() => {
			component.loginForm?.controls['password'].setValue('');
			fixture.detectChanges();

			expect(fixture.debugElement.queryAll(By.css('p')).length).toBeGreaterThanOrEqual(1);
			expect(fixture.debugElement.queryAll(By.css('p'))
				.filter(p => p.nativeElement.textContent==='Password is required')
				.length).toEqual(1);
		});
	}));
	it('does not a validation message about password length when not empty', async(() => {
		fixture.whenStable().then(() => {
			component.loginForm?.controls['password'].setValue('password');
			fixture.detectChanges();

			expect(fixture.debugElement.queryAll(By.css('p'))
				.filter(p => p.nativeElement.textContent==='Password is required')
				.length).toEqual(0);
		});
	}));
});
