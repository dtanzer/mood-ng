import { Component, OnInit } from '@angular/core';

import { CurrentMoodService, } from './mood/current-mood.service'
import { MoodData } from './mood/MoodData';

@Component({
	selector: 'mood-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
	constructor() { }

	ngOnInit() {
	}
}
