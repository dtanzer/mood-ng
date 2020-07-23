import { TestBed } from '@angular/core/testing';

import { CurrentMoodService } from './current-mood.service';

describe('CurrentMoodService', () => {
  let service: CurrentMoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentMoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
