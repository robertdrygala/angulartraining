import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { APP_STORAGE } from '../core/core.module';

describe('AuthService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: APP_STORAGE, useValue: {} }],
    }),
  );

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
