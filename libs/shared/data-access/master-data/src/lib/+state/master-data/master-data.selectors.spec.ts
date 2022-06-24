import { MasterDataEntity } from './master-data.models';
import {
  masterDataAdapter,
  MasterDataPartialState,
  initialState,
} from './master-data.reducer';
import * as MasterDataSelectors from './master-data.selectors';

describe('MasterData Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMasterDataId = (it: MasterDataEntity) => it.id;
  const createMasterDataEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as MasterDataEntity);

  let state: MasterDataPartialState;

  beforeEach(() => {
    state = {
      masterData: masterDataAdapter.setAll(
        [
          createMasterDataEntity('PRODUCT-AAA'),
          createMasterDataEntity('PRODUCT-BBB'),
          createMasterDataEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('MasterData Selectors', () => {
    it('getAllMasterData() should return the list of MasterData', () => {
      const results = MasterDataSelectors.getAllMasterData(state);
      const selId = getMasterDataId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = MasterDataSelectors.getSelected(state) as MasterDataEntity;
      const selId = getMasterDataId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getMasterDataLoaded() should return the current "loaded" status', () => {
      const result = MasterDataSelectors.getMasterDataLoaded(state);

      expect(result).toBe(true);
    });

    it('getMasterDataError() should return the current "error" state', () => {
      const result = MasterDataSelectors.getMasterDataError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
