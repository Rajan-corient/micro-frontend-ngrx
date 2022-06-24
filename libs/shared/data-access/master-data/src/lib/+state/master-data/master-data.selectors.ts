import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MasterDataState } from './master-data.models';
import {
  MASTER_DATA_FEATURE_KEY,
} from './master-data.reducer';

// Lookup the 'MasterData' feature state managed by NgRx
// Lookup the 'MasterData' feature state managed by NgRx
export const getMasterDataState = createFeatureSelector<MasterDataState>(
  MASTER_DATA_FEATURE_KEY
);

export const selectAllAssetgroups = createSelector(
  getMasterDataState,
  (masterData)=>masterData.allAssetGroups
)

export const selectAllProducts = createSelector(
  getMasterDataState,
  (masterData)=>masterData.allProducts
)

