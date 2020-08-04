import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentLoginComponent } from './current-login.component';
import { By } from '@angular/platform-browser';

describe('CurrentLoginComponent', () => {
	let component: CurrentLoginComponent;
	let fixture: ComponentFixture<CurrentLoginComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CurrentLoginComponent, ],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CurrentLoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('has an input to enter the user name, password field and submit button', () => {
		fixture.whenStable().then( () => {
			const userNameInput = fixture.debugElement.query(By.css('input[name="username"]'));
			expect(userNameInput).toBeTruthy();
			expect(userNameInput.nativeElement.type).toBe('text');

			const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
			expect(passwordInput).toBeTruthy();
			expect(passwordInput.nativeElement.type).toBe('password');

			const submitButton = fixture.debugElement.query(By.css('input[name="submit"]'));
			expect(submitButton).toBeTruthy();
			expect(submitButton.nativeElement.type).toBe('submit');
			expect(submitButton.nativeElement.value).toBe('Login');
	 })
	});
});
