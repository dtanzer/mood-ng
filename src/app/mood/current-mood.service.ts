import { Injectable } from '@angular/core';

import { MoodData } from './MoodData';

@Injectable({
	providedIn: 'root'
})
export class CurrentMoodService {

	constructor() { }

	getCurrentMoods(): MoodData[] {
		return [
			{ emoji: ':smile:', message: 'i feel good nana nana nanana', userName: 'Jane Doe', userId: 'some-user-id-1', id: 'some-id-1', sequenceId: 'some-sequence-id-1', createdAt: new Date(), },
			{ emoji: ':rolling_on_the_floor_laughing:', message: 'hahaha can\'t believe it', userName: 'Jane Doe', userId: 'some-user-id-1', id: 'some-id-1', sequenceId: 'some-sequence-id-1', createdAt: new Date(), },
			{ emoji: ':smiling_face_with_three_hearts:', message: 'omg is that cute', userName: 'Jane Doe', userId: 'some-user-id-1', id: 'some-id-1', sequenceId: 'some-sequence-id-1', createdAt: new Date(), },
			{ emoji: ':fox_face:', message: 'WTFox!', userName: 'Jane Doe', userId: 'some-user-id-1', id: 'some-id-1', sequenceId: 'some-sequence-id-1', createdAt: new Date(), },
			{ emoji: ':beer:', message: 'saturday night\'s in neon lights...', userName: 'Jane Doe', userId: 'some-user-id-1', id: 'some-id-1', sequenceId: 'some-sequence-id-1', createdAt: new Date(), },
		]
	}
}
