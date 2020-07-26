import { Component, OnInit, Input } from '@angular/core';

import { MoodData } from '../MoodData';

@Component({
	selector: 'mood-display-compact',
	templateUrl: './display-compact.component.html',
	styleUrls: ['./display-compact.component.css']
})
export class DisplayCompactComponent implements OnInit {
	@Input() moodData?: MoodData

	constructor() { }

	ngOnInit(): void {
	}

}
