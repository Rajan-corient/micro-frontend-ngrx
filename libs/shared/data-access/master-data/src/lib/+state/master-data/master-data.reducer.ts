import { createReducer, on, Action } from '@ngrx/store';

import * as MasterDataActions from './master-data.actions';
import { MasterDataState } from './master-data.models';

export const MASTER_DATA_FEATURE_KEY = 'masterData';


export const initialMasterDataState: MasterDataState = {
  // set initial required properties
  allAssetGroups: [],
  selectedAssetGroups: [],
  allProducts: [],
  allFlowComputers: [],
  allMeterLocations: [],
  allMeters:  [],
  ticketAssociationStatus: [],
  ticketTypes: [],
  allMeterOwners: [],
  loadingAssetGroups: null,
  error: null
};

const masterDataReducer = createReducer(
  initialMasterDataState,
  on(MasterDataActions.loadAssetGroup, (state, action) => {
    return {
      ...state,
      loadingAssetGroups: action.loadingAssetGroups
    }
  }), 
  on(MasterDataActions.loadAssetGroupSuccess, (state, action) => {
    return {
      ...state,
      allAssetGroups: action.assetGroups,
      loadingAssetGroups: false
    }
  }), 
  on(MasterDataActions.loadAssetGroupFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loadingAssetGroups: false
    }
  }),  

  on(MasterDataActions.loadProduct, (state, action) => {
    return {
      ...state,
      selectedAssetGroups: action.selectedAssetGroups
    }
  }), 
  on(MasterDataActions.loadProductSuccess, (state, action) => {
    return {
      ...state,
      allProducts: action.products
    }
  }), 
  on(MasterDataActions.loadProductFaliure, (state, action) => {
    return {
      ...state,
      error: action.error,
    }
  })
);

export function reducer(state: MasterDataState | undefined, action: Action) {
  return masterDataReducer(state, action);
}
