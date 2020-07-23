import { Injectable } from '@angular/core';

export type Mood = {

}

@Injectable({
	providedIn: 'root'
})
export class CurrentMoodService {

	constructor() { }

	getCurrentMoods(): Mood[] {
		return []
	}
}
