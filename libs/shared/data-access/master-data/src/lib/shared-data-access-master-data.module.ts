import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMasterData from './+state/master-data/master-data.reducer';
import { MasterDataEffects } from './+state/master-data/master-data.effects';
import { MasterDataFacade } from './+state/master-data/master-data.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMasterData.MASTER_DATA_FEATURE_KEY,
      fromMasterData.reducer
    ),
    EffectsModule.forFeature([MasterDataEffects]),
  ],
  providers: [MasterDataFacade],
})
export class SharedDataAccessMasterDataModule {}
