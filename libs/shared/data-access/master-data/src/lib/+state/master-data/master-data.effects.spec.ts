import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as MasterDataActions from './master-data.actions';
import { MasterDataEffects } from './master-data.effects';

describe('MasterDataEffects', () => {
  let actions: Observable<Action>;
  let effects: MasterDataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MasterDataEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MasterDataEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MasterDataActions.init() });

      const expected = hot('-a-|', {
        a: MasterDataActions.loadMasterDataSuccess({ masterData: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
