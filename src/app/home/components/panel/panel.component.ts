import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TotalQuoteService } from 'src/app/service/totalQuote/total-quote.service';
import { PopupComponent } from '../popup/popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyServicesService } from 'src/app/service/companyServices/company-services.service';
import { websitePanelData } from 'src/app/interfaces/websitePanelData.interface';

@Component({
  selector: 'app-home-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  //set up to notify parent (home)of change - this emits event, that is caught in parentHTML
  @Output() panelChanged = new EventEmitter<void>

  pages: number = 0;
  languages: number = 0;

  serviceDetailsForm: FormGroup;
  constructor(private fb: FormBuilder,
    public totalQuoteService: TotalQuoteService,
    private openBModal: NgbModal,
    private companyServicesList: CompanyServicesService,
    ) {
    this.serviceDetailsForm = this.fb.group({
      pages: ["0", [ Validators.min(1), Validators.required]],
      languages: ["0", [Validators.min(1), Validators.required]]
    })
  }
  
  get panelDataList(): websitePanelData[] {
    return this.companyServicesList.websitePanelData
  }
  
  panelIsValid(){
    return this.serviceDetailsForm.valid;

  }

  computeExrasPrice(): void {
    if(this.serviceDetailsForm.valid){
      this.totalQuoteService.computeWebSiteExtras(this.pages, this.languages);
      this.extrasChanged();
    } 
  }

  addExtra(extra: string ): void {
   
    if(extra==="pages") {
      this.panelDataList[0].valueChanged=true;
      this.pages++;
      this.serviceDetailsForm.controls[extra].setValue(this.pages);
    }else {
      this.panelDataList[1].valueChanged=true;
        this.languages++
        this.serviceDetailsForm.controls[extra].setValue(this.languages);
    }
    
    this.computeExrasPrice();
    // this.extrasChanged();
  };

  subtractExtra(extra: string): void {
    
    if(extra==="pages") {
      this.panelDataList[0].valueChanged=true;
        this.pages --
      this.serviceDetailsForm.controls[extra].setValue(this.pages);
     }else {
        this.panelDataList[1].valueChanged=true;
        this.languages--
        this.serviceDetailsForm.controls[extra].setValue(this.languages);
     }

    this.computeExrasPrice();
    // this.extrasChanged();
   };

  //Emit to home(parent), smt in child changed
  extrasChanged(): void{
    this.panelChanged.emit();
  };
 
  openPopup(): void{    
    this.openBModal.open(PopupComponent, { centered: true });
  }; 

}