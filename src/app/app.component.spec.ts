import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MoodData } from './mood/MoodData';

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

	it('display the feed of all current moods', () => {
		const fixture = TestBed.createComponent(AppComponent);

		fixture.detectChanges();

		const compiled = fixture.nativeElement;
		expect(compiled.querySelectorAll('feed-all-current').length).toBe(1);
	})
});
