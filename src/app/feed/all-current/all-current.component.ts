import { Component, OnInit } from '@angular/core';

import { MoodData } from '../../mood/MoodData';
import { CurrentMoodService } from '../../mood/current-mood.service';

@Component({
	selector: 'feed-all-current',
	templateUrl: './all-current.component.html',
	styleUrls: ['./all-current.component.css']
})
export class AllCurrentComponent implements OnInit {
	public moods: MoodData[] = [];

	constructor(private currentMoodService: CurrentMoodService) { }

	ngOnInit(): void {
		this.moods = this.currentMoodService.getCurrentMoods();
	}

}
