import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TotalBudgetService } from 'src/app/service/totalBudget/total-budget.service';
import { PopupComponent } from '../popup/popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  pagesValueChanged: boolean = false;
  languagesValueChanged: boolean = false;

  serviceDetailsForm: FormGroup;
  constructor(private fb: FormBuilder,
    public totalBudget: TotalBudgetService,
    private openBModal: NgbModal,
    ) {
    this.serviceDetailsForm = this.fb.group({
      pages: ["0", [ Validators.min(1), Validators.required]],
      languages: ["0", [Validators.min(1), Validators.required]]
    })
  }
  
  computeExrasPrice(): void {
    if(this.serviceDetailsForm.valid){
      this.totalBudget.computeWebSiteExtras(this.pages, this.languages);
      this.extrasChanged();
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
    this.computeExrasPrice()
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
    this.computeExrasPrice()
   }

  //Emit to home(parent), smt in child changed
  extrasChanged(): void{
    this.panelChanged.emit();
  }
 
  openPopup(): void{    
    this.openBModal.open(PopupComponent, { centered: true });
  }


  }