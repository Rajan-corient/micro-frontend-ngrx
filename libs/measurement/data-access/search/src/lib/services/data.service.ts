import { Injectable } from '@angular/core';
import { IProduct, IAssetGroup, ITicketType, IMeterOwner, IFlowComputer, ITicketNumber, IMeterLocation, IMeterName, ITicketStatus } from '../..';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  assetGroupList:IAssetGroup[] = [
    { id: 1, name: 'Asset Group 1' },
    { id: 2, name: 'Asset Group 2' },
    { id: 3, name: 'Asset Group 3' },
    { id: 4, name: 'Asset Group 4' }
  ]

  productList:IProduct[] = [
    { id: 1, name: "Product 1.1", assetId: 1 },
    { id: 2, name: "Product 1.2", assetId: 1 },
    { id: 3, name: "Product 1.3", assetId: 1 },
    { id: 4, name: "Product 2.1", assetId: 2 },
    { id: 5, name: "Product 2.2", assetId: 2 },
    { id: 6, name: "Product 2.3", assetId: 2 },
    { id: 7, name: "Product 3.1", assetId: 3 },
    { id: 8, name: "Product 3.2", assetId: 3 },
    { id: 9, name: "Product 3.3", assetId: 3 },
    { id: 10, name: "Product 4.1", assetId: 4 },
    { id: 11, name: "Product 4.2", assetId: 4 },
  ];

  ticketTypeList: ITicketType[] = [
    { id: 1, name: 'Ticket Type 1' },
    { id: 2, name: 'Ticket Type 2' },
    { id: 3, name: 'Ticket Type 3' }
  ]

  meterOwnerList: IMeterOwner[] = [
    { id: 1, name: 'Meter Owner 1' },
    { id: 2, name: 'Meter Owner 2' },
    { id: 3, name: 'Meter Owner 3' }
  ]

  flowComputerList: IFlowComputer[] = [
    { id: 1, name: 'Flow Computer 1' },
    { id: 2, name: 'Flow Computer 2' },
    { id: 3, name: 'Flow Computer 3' }
  ]

  ticketNumberList: ITicketNumber[] = [
    { id: 1, name: 'Ticket Number 1' },
    { id: 2, name: 'Ticket Number 2' },
    { id: 3, name: 'Ticket Number 3' }
  ]

  meterLocationList: IMeterLocation[] = [
    { id: 1, name: 'Meter Location 1' },
    { id: 2, name: 'Meter Location 2' },
    { id: 3, name: 'Meter Location 3' }
  ]

  meterNameList: IMeterName[] = [
    { id: 1, name: 'Meter Name 1' },
    { id: 2, name: 'Meter Name 2' },
    { id: 3, name: 'Meter Name 3' }
  ]

  ticketStatusList: ITicketStatus[] = [
    { id: 1, name: 'Status 1' },
    { id: 2, name: 'Status 2' },
    { id: 3, name: 'Status 3' }
  ]

  constructor() { }
}
