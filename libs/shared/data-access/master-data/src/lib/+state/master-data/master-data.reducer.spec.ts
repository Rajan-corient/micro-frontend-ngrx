import { Action } from '@ngrx/store';

import * as MasterDataActions from './master-data.actions';
import { MasterDataEntity } from './master-data.models';
import { State, initialState, reducer } from './master-data.reducer';

describe('MasterData Reducer', () => {
  const createMasterDataEntity = (id: string, name = ''): MasterDataEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid MasterData actions', () => {
    it('loadMasterDataSuccess should return the list of known MasterData', () => {
      const masterData = [
        createMasterDataEntity('PRODUCT-AAA'),
        createMasterDataEntity('PRODUCT-zzz'),
      ];
      const action = MasterDataActions.loadMasterDataSuccess({ masterData });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
