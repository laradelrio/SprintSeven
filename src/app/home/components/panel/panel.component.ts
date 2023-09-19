import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TotalQuoteService } from 'src/app/service/totalQuote/total-quote.service';
import { PopupComponent } from '../popup/popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {




  panelData: { name: string, label: string}[] = [
      { name: "pages", label: "Number of Pages"},
      { name: "languages", label: "Number of Languages"},
  ];













  //set up to notify parent (home)of change - this emits event, that is caught in parentHTML
  @Output() panelChanged = new EventEmitter<void>

  pages: number = 0;
  languages: number = 0;
  pagesValueChanged: boolean = false;
  languagesValueChanged: boolean = false;

  serviceDetailsForm: FormGroup;
  constructor(private fb: FormBuilder,
    public totalBudget: TotalQuoteService,
    private openBModal: NgbModal,
    ) {
    this.serviceDetailsForm = this.fb.group({
      pages: ["0", [ Validators.min(1), Validators.required]],
      languages: ["0", [Validators.min(1), Validators.required]]
    })
  }
  
  // computeExrasPrice(): void {
  //   if(this.serviceDetailsForm.valid){
  //     this.totalBudget.computeWebSiteExtras(this.pages, this.languages);
  //     this.extrasChanged();
  //   } 
  // }


  valueChanged(dataType: string){
    switch (dataType){
      case "pages":
        this.pagesValueChanged=true
        break;
      case "languages":
        this.pagesValueChanged=true
        break;
    }
  }



  addExtra(extra: string ): void {
    if(extra==="pages") {
      this.pagesValueChanged=true;
      this.pages++;
      this.serviceDetailsForm.controls['pages'].setValue(this.pages);
    }else {
      this.languagesValueChanged=true;
        this.languages++
        this.serviceDetailsForm.controls['languages'].setValue(this.languages);
    }
    // this.computeExrasPrice()
  }

  subtractExtra(extra: string): void {
    if(extra==="pages") {
      this.pagesValueChanged=true;
      this.pagesValueChanged=true;
      this.pages--
      this.serviceDetailsForm.controls['pages'].setValue(this.pages);
     }else {
        this.languagesValueChanged=true;
        this.languages--
        this.serviceDetailsForm.controls['languages'].setValue(this.languages);
     }
    // this.computeExrasPrice()
   }

  //Emit to home(parent), smt in child changed
  extrasChanged(): void{
    this.panelChanged.emit();
  }
 
  openPopup(): void{    
    this.openBModal.open(PopupComponent, { centered: true });
  }


  }