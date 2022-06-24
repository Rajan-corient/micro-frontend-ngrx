import { AssetGroup, FlowComputer, MeterLocation, MeterOwner, Product, TicketStatus, TicketType } from "../../models/data";

/**
 * Interface for the 'MasterData' data
 */
export interface MasterDataEntity {
  id: string | number; // Primary ID
  name: string;
}

export interface MasterDataState {
  allAssetGroups: AssetGroup[];
  selectedAssetGroups: AssetGroup[];
  allProducts: Product[];
  allFlowComputers: FlowComputer[];
  allMeterLocations: MeterLocation[];
  allMeters: MeterLocation[],
  ticketAssociationStatus: TicketStatus[];
  ticketTypes: TicketType[];
  allMeterOwners: MeterOwner[];
  loadingAssetGroups: boolean | null;
  error: string | null;
}
