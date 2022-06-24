import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError,switchMap, map, of, tap } from 'rxjs';
import { MasterDataService } from '../../master-data.service';
import { AssetGroup, Product } from '../../models/data'

import * as MasterDataActions from './master-data.actions';
import * as MasterDataFeature from './master-data.reducer';

@Injectable()
export class MasterDataEffects {

  loadAssetGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MasterDataActions.loadAssetGroup),
      switchMap(() => this.masterDataService.getAssetGroups().pipe(
        map((assetGroups:AssetGroup[]) => MasterDataActions.loadAssetGroupSuccess({assetGroups})),
        catchError(error => of(MasterDataActions.loadAssetGroupFailure({error: 'Asset Group Api Failed'})))
      ))
    )
  );

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MasterDataActions.loadProduct),
      switchMap((action) => this.masterDataService.getProducts().pipe(
        map((products: Product[]) => {
          const filteredProducts:Product[] = this.masterDataService.createProductList(
            action.selectedAssetGroups, products);
          return MasterDataActions.loadProductSuccess({products: filteredProducts})
        }),
        catchError(error => of(MasterDataActions.loadProductFaliure({error: 'Product Api Failed'})))
      ))
    )
  );

  constructor(private readonly actions$: Actions,
              private store: Store,
              private masterDataService: MasterDataService) {}
}
