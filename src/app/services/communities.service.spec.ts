import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

import { CommunitiesService } from './communities.service';

describe('CommunitiesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [CommunitiesService]
        });
    });

    it('should be created', inject([CommunitiesService], (service: CommunitiesService) => {
        expect(service).toBeTruthy();
    }));
});
