import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct, MeasurementEnum, MmbSearchService, SearchEnum, IAssetGroup, 
  ITicketStatus, IMeterName, IMeterLocation, ITicketNumber, IFlowComputer, 
  IMeterOwner, ITicketType } from '@ep-monorepo/measurement/data-access/search';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'ep-monorepo-mmb-search',
  templateUrl: './mmb-search.component.html',
  styleUrls: ['./mmb-search.component.scss']
})

export class MmbSearchComponent implements OnInit {

  searchEnum = SearchEnum;
  measurementEnum = MeasurementEnum;

  @Input() assetGroups: IAssetGroup[] = [];
  @Input() products: IProduct[] = [];
  @Input() ticketTypes: ITicketType[] = [];
  @Input() meterOwners: IMeterOwner[] = [];
  @Input() flowComputers: IFlowComputer[] = [];
  @Input() ticketNumbers: ITicketNumber[] = [];
  @Input() meterLocations: IMeterLocation[] = [];
  @Input() meterNames: IMeterName[] = [];
  @Input() ticketStatus: ITicketStatus[] = [];


  measurementSearchForm!: FormGroup;
  
  @Output() emitMultiselect = new EventEmitter();

  constructor(private fb: FormBuilder,
    private mmbSearch: MmbSearchService) {
  }

  ngOnInit() {

    this.measurementSearchForm = this.fb.group({
      assetGroup: [{value: [], disabled: false}, Validators.required],
      meterOwner: [{value: [], disabled: false}],
      meterLocation: [{value: [], disabled: false}],
      product: [{value: [], disabled: false}],
      flowComputer: [{value: [], disabled: false}],
      meterName: [{value: [], disabled: false}],
      fromDate: [{value: '', disabled: false}],
      fromTo: [{value: '', disabled: false}],
      ticketStatus: [{value: [], disabled: false}],
      ticketType: [{value: [], disabled: false}],
      ticketNumber: [{value: [], disabled: false}],
      zeroVolumeTicket: [{value: false, disabled: false}]
    })

    // this.measurementSearchForm.valueChanges.subscribe(formValue =>{
    //   console.log(formValue)
    // })
  }

  handleSearch (event: any) {
    console.log(this.measurementSearchForm.value)
  }

  handleClear (event:any) {
    this.measurementSearchForm.reset();
  }

  handleMultiSelect (event:any, controlName:string) {
    const selectedObj = {event, controlName}
    this.emitMultiselect.emit(selectedObj)
  }

}
