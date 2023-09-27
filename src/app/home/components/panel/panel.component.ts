import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TotalQuoteService } from 'src/app/service/totalQuote/total-quote.service';
import { PopupComponent } from '../popup/popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyServicesService } from 'src/app/service/companyServices/company-services.service';
import { websitePanelData } from 'src/app/interfaces/websitePanelData.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  //set up to notify parent (home)of change - this emits event, that is caught in parentHTML
  @Output() panelChanged = new EventEmitter<void>


  serviceDetailsForm: FormGroup;
  constructor(private fb: FormBuilder,
    public totalQuoteService: TotalQuoteService,
    private openBModal: NgbModal,
    private companyServicesList: CompanyServicesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.serviceDetailsForm = this.fb.group({
      pages: ["", [Validators.min(1), Validators.required]],
      languages: ["", [Validators.min(1), Validators.required]]
    })
  }

  ngOnInit(): void {
    this.sf.get('pages')?.setValue(Number(this.activatedRoute.snapshot.queryParamMap.get('wPages'))),
    this.sf.controls['languages'].setValue(Number(this.activatedRoute.snapshot.queryParamMap.get('wLang')))
  }

  get sf() {
    return this.serviceDetailsForm
  }
  get panelDataList(): websitePanelData[] {
    return this.companyServicesList.websitePanelData
  }

  panelIsValid(): boolean {
    return this.serviceDetailsForm.valid;

  }

  addExtra(extra: string): void {

    let panelDataObject = this.panelDataList.find((panelData) => panelData.name === extra)

    panelDataObject!.valueChanged = true;
    this.serviceDetailsForm.controls[extra].setValue(Number(this.sf.get(extra)?.value) + 1);

    this.extrasChanged();
  };

  subtractExtra(extra: string): void {
    let panelDataObject = this.panelDataList.find((panelData) => panelData.name === extra)

    panelDataObject!.valueChanged = true;
    this.serviceDetailsForm.controls[extra].setValue(Number(this.sf.get(extra)?.value) - 1);

    this.extrasChanged();
    
  };


  //Emit to home(parent), smt in child changed
  extrasChanged(): void {
    if (this.serviceDetailsForm.valid) {
      this.totalQuoteService.computeWebSiteExtras(this.sf.get('pages')?.value, this.sf.get('languages')?.value);
      this.panelChanged.emit();
    };
  }

  openPopup(): void {
    this.openBModal.open(PopupComponent, { centered: true });
  };

}