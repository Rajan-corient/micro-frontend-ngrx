import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { AssetGroup, FlowComputer, MeterLocation, MeterName, MeterOwner, Product, TicketNumber, TicketStatus, TicketType } from './models/data';

@Injectable({
  providedIn: 'root' // It will inject this provider at the root level of the application so it can be accessed anywhere.
})
export class MasterDataService {

  constructor(private httpClient:HttpClient) { }

  mockDataUrl = `http://localhost:4201/assets/data/`;

  getAssetGroups() {
    return this.httpClient.get<AssetGroup[]>(`${this.mockDataUrl}assetGroup.json`);
  }

  getProducts() {
    return this.httpClient.get<Product[]>(`${this.mockDataUrl}product.json`);
  }

  getFlowComputers() {
    return this.httpClient.get<FlowComputer[]>(`${this.mockDataUrl}flowComputer.json`);
  }

  getMeterLocation() {
    return this.httpClient.get<MeterLocation[]>(`${this.mockDataUrl}meterLocation.json`);
  }

  getMeterOwner() {
    return this.httpClient.get<MeterOwner[]>(`${this.mockDataUrl}meterOwner.json`);
  }

  getMeterName() {
    return this.httpClient.get<MeterName[]>(`${this.mockDataUrl}meterName.json`);
  }

  getTicketNumber() {
    return this.httpClient.get<TicketNumber[]>(`${this.mockDataUrl}ticketNumber.json`);
  }

  getTicketStatus() {
    return this.httpClient.get<TicketStatus[]>(`${this.mockDataUrl}ticketStatus.json`);
  }

  getTicketType() {
    return this.httpClient.get<TicketType[]>(`${this.mockDataUrl}ticketType.json`);
  }

  createProductList (assetGroups:AssetGroup[], productList:Product[]) {
    let filteredProducts:Product[];
    if (assetGroups.length) {
      filteredProducts = productList.filter((productObj:Product) => { 
        return assetGroups.some((assetGroupObj) => {
          return productObj.assetId == assetGroupObj.id;
        })
      })
    } else {
      filteredProducts = cloneDeep(productList);
    }
    return filteredProducts;
  }

}
