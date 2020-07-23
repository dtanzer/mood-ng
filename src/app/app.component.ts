import { Component, OnInit } from '@angular/core';

import { CurrentMoodService, Mood, } from './mood/current-mood.service'

@Component({
	selector: 'mood-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public moods: Mood[] = [];
	
	constructor(private currentMoodService: CurrentMoodService) { }

	ngOnInit() {
		this.moods = this.currentMoodService.getCurrentMoods();
	}
}
