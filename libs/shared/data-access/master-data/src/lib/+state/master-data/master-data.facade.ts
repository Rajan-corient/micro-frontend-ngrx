import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { AssetGroup, Product } from '../../models/data';

import * as MasterDataActions from './master-data.actions';
// import * as MasterDataFeature from './master-data.reducer';
import * as MasterDataSelectors from './master-data.selectors';

@Injectable({
  providedIn: 'root'
})
export class MasterDataFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */

  assetGroupOptions$ = this.store.select(MasterDataSelectors.selectAllAssetgroups);
  products$ = this.store.select(MasterDataSelectors.selectAllProducts);

  constructor(private store: Store) {

  }

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  loadAllAssetGroup() {
    this.store.dispatch(MasterDataActions.loadAssetGroup({loadingAssetGroups: true}));
  }

  createProductList (selectedAssetGroups: AssetGroup[]) {
    this.store.dispatch(MasterDataActions.loadProduct({selectedAssetGroups}));
  }
}
