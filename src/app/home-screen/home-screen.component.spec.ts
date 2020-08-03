import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenComponent } from './home-screen.component';

describe('HomeScreenComponent', () => {
	let component: HomeScreenComponent;
	let fixture: ComponentFixture<HomeScreenComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ HomeScreenComponent ]
		})
		.compileComponents();
	}));

	it('displays the feed of all current moods', () => {
		const fixture = TestBed.createComponent(HomeScreenComponent);

		fixture.detectChanges();

		const compiled = fixture.nativeElement;
		expect(compiled.querySelectorAll('feed-all-current').length).toBe(1);
	})

});
