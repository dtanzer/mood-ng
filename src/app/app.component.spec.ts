import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mock, instance, Mock, when, } from 'omnimock';

import { AppComponent } from './app.component';
import { CurrentMoodService } from './mood/current-mood.service';

describe('AppComponent', () => {
	let moodService: Mock<CurrentMoodService>;
	
	beforeEach(async(() => {
		moodService = mock<CurrentMoodService>('moodService');

		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			providers: [
				{ provide: CurrentMoodService, useValue: instance(moodService)},
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	}));

	it('contains a compact mood display for three registered users on the front page', () => {
		when(moodService.getCurrentMoods()).return([{},{},{}]);
		const fixture = TestBed.createComponent(AppComponent);

		fixture.detectChanges();

		const compiled = fixture.nativeElement;
		expect(compiled.querySelectorAll('mood-display-compact').length).toBe(3);
	});

	it('contains a compact mood display for four registered users on the front page', () => {
		when(moodService.getCurrentMoods()).return([{},{},{},{}]);
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement;
		expect(compiled.querySelectorAll('mood-display-compact').length).toBe(4);
	});
});
