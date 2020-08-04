import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent,
			],
		}).compileComponents();
	}));

	it('displays a "Home" link', () => {
		const fixture = TestBed.createComponent(AppComponent);

		fixture.detectChanges();

		const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
		const index = debugElements.findIndex(de => {
			return de.properties['href'] === '/';
		});
		expect(index).toBeGreaterThan(-1);
		expect(debugElements[index].nativeElement.textContent).toBe('Home');
	})

	it('displays a "Register" link', () => {
		const fixture = TestBed.createComponent(AppComponent);

		fixture.detectChanges();

		const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
		const index = debugElements.findIndex(de => {
			return de.properties['href'] === '/register';
		});
		expect(index).toBeGreaterThan(-1);
		expect(debugElements[index].nativeElement.textContent).toBe('Register');
	})

	it('displays a "Login" link', () => {
		const fixture = TestBed.createComponent(AppComponent);

		fixture.detectChanges();

		const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
		const index = debugElements.findIndex(de => {
			return de.properties['href'] === '/login';
		});
		expect(index).toBeGreaterThan(-1);
		expect(debugElements[index].nativeElement.textContent).toBe('Login');
	})
});
