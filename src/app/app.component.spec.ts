import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mock, instance, Mock, when, } from 'omnimock';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrentMoodService } from './mood/current-mood.service';
import { DisplayCompactComponent } from './mood/display-compact/display-compact.component';
import { MoodData } from './mood/MoodData';

const defaultMoodData : MoodData = {
	id: 'some-id',
	sequenceId: 'some-sequence-id',

	emoji: ':smile:',
	message: 'i feel good nana nana nanana',
	createdAt: new Date(),

	userId: 'some-user-id',
	userName: 'Jane Doe',
}
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
				AppComponent,
				DisplayCompactComponent,
			],
		}).compileComponents();
	}));

	it('contains a compact mood display for three registered users on the front page', () => {
		when(moodService.getCurrentMoods()).return([defaultMoodData,defaultMoodData,defaultMoodData,]);
		const fixture = TestBed.createComponent(AppComponent);

		fixture.detectChanges();

		const compiled = fixture.nativeElement;
		expect(compiled.querySelectorAll('mood-display-compact').length).toBe(3);
	});

	it('contains a compact mood display for four registered users on the front page', () => {
		when(moodService.getCurrentMoods()).return([defaultMoodData,defaultMoodData,defaultMoodData,defaultMoodData,]);
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement;
		expect(compiled.querySelectorAll('mood-display-compact').length).toBe(4);
	});

	it('passes mood data to display component', () => {
		when(moodService.getCurrentMoods()).return([defaultMoodData,]);
		const fixture = TestBed.createComponent(AppComponent);

		fixture.detectChanges();

		const compactDisplay = fixture.debugElement.query(By.directive(DisplayCompactComponent))
		expect(compactDisplay).toBeTruthy();
		expect(compactDisplay.componentInstance.moodData).toBe(defaultMoodData)
	});
});
