import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as MasterDataActions from './master-data.actions';
import { MasterDataEffects } from './master-data.effects';
import { MasterDataFacade } from './master-data.facade';
import { MasterDataEntity } from './master-data.models';
import {
  MASTER_DATA_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './master-data.reducer';
import * as MasterDataSelectors from './master-data.selectors';

interface TestSchema {
  masterData: State;
}

describe('MasterDataFacade', () => {
  let facade: MasterDataFacade;
  let store: Store<TestSchema>;
  const createMasterDataEntity = (id: string, name = ''): MasterDataEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(MASTER_DATA_FEATURE_KEY, reducer),
          EffectsModule.forFeature([MasterDataEffects]),
        ],
        providers: [MasterDataFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(MasterDataFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allMasterData$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allMasterData$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadMasterDataSuccess` to manually update list
     */
    it('allMasterData$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allMasterData$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        MasterDataActions.loadMasterDataSuccess({
          masterData: [
            createMasterDataEntity('AAA'),
            createMasterDataEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allMasterData$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
