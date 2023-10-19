import { TestBed } from '@angular/core/testing';

import { ClientSingletonService } from './client-singleton.service';

describe('ClientSingletonService', () => {
  let service: ClientSingletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientSingletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
