/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpConnectorService } from './http-connector.service';

describe('HttpConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpConnectorService]
    });
  });

  it('should ...', inject([HttpConnectorService], (service: HttpConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
