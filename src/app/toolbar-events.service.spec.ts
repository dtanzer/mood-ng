import { TestBed } from '@angular/core/testing';

import { ToolbarEventsService } from './toolbar-events.service';

describe('ToolbarEventsService', () => {
  let service: ToolbarEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
