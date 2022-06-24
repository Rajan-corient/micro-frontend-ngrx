import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct, MmbSearchService, IAssetGroup } from '@ep-monorepo/measurement/data-access/search';
import { MasterDataFacade, MasterDataService } from '@ep-monorepo/shared/data-access/master-data';
import { cloneDeep } from 'lodash';
import { Observable } from 'rxjs';

@Component({
  selector: 'ep-monorepo-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  assetGroups$!: Observable<IAssetGroup[]>;
  products$!: Observable<IProduct[]>;

  measurementSearchForm!: FormGroup;

  constructor(private fb: FormBuilder,
    public mmbSearch: MmbSearchService,
    public masterDataService: MasterDataService,
    public masterDataFacade: MasterDataFacade) {
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    // this.assetGroups$ = this.masterDataService.getAssetGroups();
    this.masterDataFacade.loadAllAssetGroup();
    // this.products$ = this.masterDataService.getProducts();
  }

  getMultiselect (data:any) {
    const {event, controlName} = data;
    console.log(event, controlName)
    switch (controlName) {
      case 'assetGroup':
        this.onAssetGroupSelection(event.value);
        break;
      case 'meterOwner':
        
        break;
      case 'meterLocation':
        
        break;
      case 'product':
        this.onProductSelection(event.value)
        break;
      case 'flowComputer':
        
        break;
      case 'meterName':
        
        break;

      case 'ticketStatus':
      
        break;

      case 'ticketType':
      
        break;

      case 'ticketNumber':
    
        break;
    
      default:
        break;
    }
  }

  // createProductList (selectedAssets:IAssetGroup[]) {
  //   if (selectedAssets.length) {
  //     this.products$ = this.mmbSearch.createProductList(selectedAssets);
  //   } else {
  //     this.products$ = this.getProducts();
  //     this.measurementSearchForm.get('product')?.setValue([]);
  //   }
  // }

  // getProducts ():Observable<IProduct[]> {
  //   return this.mmbSearch.getProducts();
  // }

  // getAssetGroups ():Observable<IAssetGroup[]> {
  //   return this.mmbSearch.getAssetGroups();
  // }

  createProductList (selectedAssets:IAssetGroup[]) {
    // this.mmbSearch.createProductList(selectedAssets);
    this.masterDataFacade.createProductList(selectedAssets);
  }

  onAssetGroupSelection(assetData: IAssetGroup[]) {
    this.createProductList(assetData);
  }

  onProductSelection(productData: IProduct[]) {
    console.log(productData)
  }


}
