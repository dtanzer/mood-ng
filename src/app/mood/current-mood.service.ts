import { Injectable } from '@angular/core';

import { MoodData } from './MoodData';

@Injectable({
	providedIn: 'root'
})
export class CurrentMoodService {

	constructor() { }

	getCurrentMoods(): MoodData[] {
		return []
	}
}
