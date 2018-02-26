import { TestBed, inject } from '@angular/core/testing';

import { DataTableServiceService } from './data-table-service.service';

describe('DataTableServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTableServiceService]
    });
  });

  it('should be created', inject([DataTableServiceService], (service: DataTableServiceService) => {
    expect(service).toBeTruthy();
  }));
});
