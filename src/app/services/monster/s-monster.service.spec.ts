import { TestBed } from '@angular/core/testing';

import { SMonsterService } from './s-monster.service';

describe('SMonsterService', () => {
  let service: SMonsterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMonsterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
