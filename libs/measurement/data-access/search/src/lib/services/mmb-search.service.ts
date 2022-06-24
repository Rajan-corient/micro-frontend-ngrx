import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { IProduct, IAssetGroup, ITicketType, IMeterOwner, IFlowComputer, ITicketNumber, IMeterLocation, IMeterName, ITicketStatus } from '../..';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';    
import { cloneDeep } from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class MmbSearchService {

  productList: IProduct[] = [];
  assetGroupList: IAssetGroup[] = [];

  constructor(private dataService: DataService) { }

  private assetGroupSubject = new BehaviorSubject<IAssetGroup[]>(this.dataService.assetGroupList);    
  public assetGroups$ = this.assetGroupSubject.asObservable();
  
  private productSubject = new BehaviorSubject<IProduct[]>(this.dataService.productList);    
  public products$ = this.productSubject.asObservable();

  private ticketTypeSubject = new BehaviorSubject<ITicketType[]>(this.dataService.ticketTypeList);    
  public ticketTypes$ = this.ticketTypeSubject.asObservable();

  private meterOwnerSubject = new BehaviorSubject<IMeterOwner[]>(this.dataService.meterOwnerList);    
  public meterOwners$ = this.meterOwnerSubject.asObservable();

  private flowComputerSubject = new BehaviorSubject<IFlowComputer[]>(this.dataService.flowComputerList);    
  public flowComputers$ = this.flowComputerSubject.asObservable();

  private ticketNumberSubject = new BehaviorSubject<ITicketNumber[]>(this.dataService.ticketNumberList);    
  public ticketNumbers$ = this.ticketNumberSubject.asObservable();

  private meterLocationSubject = new BehaviorSubject<IMeterLocation[]>(this.dataService.meterLocationList);    
  public meterLocations$ = this.meterLocationSubject.asObservable();

  private meterNameSubject = new BehaviorSubject<IMeterName[]>(this.dataService.meterNameList);    
  public meterNames$ = this.meterNameSubject.asObservable();

  private ticketStatusSubject = new BehaviorSubject<ITicketStatus[]>(this.dataService.ticketStatusList);    
  public ticketStatus$ = this.ticketStatusSubject.asObservable();


  createProductList (assetGroups:IAssetGroup[]) {
    let filteredProducts:IProduct[];
    if (assetGroups.length) {
      filteredProducts = this.dataService.productList.filter((productObj:IProduct) => { 
        return assetGroups.some((assetGroupObj) => {
          return productObj.assetId == assetGroupObj.id;
        })
      })
    } else {
      filteredProducts = cloneDeep(this.dataService.productList);
    }
    this.productSubject.next(filteredProducts);
  }

  // getAssetGroups (): Observable<IAssetGroup[]> {
  //   return of(this.dataService.assetGroupList).pipe(
  //     tap(data => {
  //       this.assetGroupList = data;
  //     }),
  //     delay(1000)
  //   )
  // }

  // getProducts (): Observable<IProduct[]> {
  //   return of(this.dataService.productList).pipe(
  //     tap(data => {
  //       this.productList = data;
  //     }),
  //     delay(1000)
  //   )
  // }

  // createProductList (assetGroups:IAssetGroup[]):Observable<IProduct[]> {
  //   const filteredProducts = this.productList.filter((productObj:IProduct) => { 
  //     return assetGroups.some((assetGroupObj) => {
  //       return productObj.assetId == assetGroupObj.id;
  //     })
  //   })
  //   return of(filteredProducts);
  // }


}
