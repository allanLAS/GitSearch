import { GitService } from './git-service';
import { TestBed, inject } from '@angular/core/testing';


describe('GitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitService]
    });
  });

  it('should be created', inject([GitService], (service: GitService) => {
    expect(service).toBeTruthy();
  }));
});