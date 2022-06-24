import { createAction, props } from '@ngrx/store';
import { AssetGroup, Product } from '../../models/data';



export const loadAssetGroup = createAction(
  '[search Page] Load AssetGroups',
  props<{ loadingAssetGroups: boolean | null }>()
);

export const loadAssetGroupSuccess = createAction(
  '[Asset Group API] Load AssetGroups Success',
  props<{ assetGroups: AssetGroup[] }>()
);

export const loadAssetGroupFailure = createAction(
  '[Asset Group API] Load AssetGroups Failure',
  props<{ error: string | null }>()
);

export const loadProduct = createAction(
  '[search Page] AssetGroups Selection',
  props<{ selectedAssetGroups: AssetGroup[] }>()
);

export const loadProductSuccess = createAction(
  '[Product Api] Load Product Success',
  props<{ products: Product[] }>()
);

export const loadProductFaliure = createAction(
  '[Product Api] Load Product Failure',
  props<{ error: string | null }>()
);
