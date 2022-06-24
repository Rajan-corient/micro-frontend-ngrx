export interface IAssetGroup {
    id: number,
    name: string
} 

export interface IProduct {
    id: number,
    name: string,
    assetId: number
}

export interface ITicketType {
    id: number,
    name: string
}

export interface IMeterOwner {
    id: number,
    name: string
} 

export interface IFlowComputer {
    id: number,
    name: string
}

export interface ITicketNumber {
    id: number,
    name: string
}

export interface IMeterLocation {
    id: number,
    name: string
}

export interface IMeterName {
    id: number,
    name: string
}

export interface ITicketStatus {
    id: number,
    name: string
} 