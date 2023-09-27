import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyServicesService } from '../service/companyServices/company-services.service';
import { CompanyService } from '../interfaces/companyService.interface';
import { TotalQuoteService } from '../service/totalQuote/total-quote.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../service/FormValidationService/form-validation-service.service';
import { ClientData } from '../interfaces/clientData.interface';
import { ClientDataServiceService } from '../service/clientDataService/client-data-service.service';
import { PanelComponent } from './components/panel/panel.component';
import { RearrangeTableService } from '../service/rearrangeTable/rearrange-table.service';
import { ClientQuoteListComponent } from './components/client-quote-list/client-quote-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(PanelComponent) panelComponent: PanelComponent | undefined;
  @ViewChild(ClientQuoteListComponent) clientTableComponent!: ClientQuoteListComponent;

  totalQuote: number = 0;
  isValidForm: boolean = false;

 clientForm: FormGroup

  constructor(
    public formValidationService: FormValidationService,
    public companyServicesList: CompanyServicesService,
    public clientDataList: ClientDataServiceService,
    public totalQuoteService: TotalQuoteService,
    public rearrangeTable: RearrangeTableService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clipboard: Clipboard,
  ) {
    
    this.clientForm = new FormGroup({
    
      serviceCheckbox: new FormGroup(
        {
          website: new FormControl(false),
          seo: new FormControl(false),
          publicity: new FormControl(false),
        }, 
      ),
  
      clientName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      quoteName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })

  };

  ngOnInit(): void {
    this.f.get("serviceCheckbox.website")?.setValue(this.activatedRoute.snapshot.queryParamMap.get('web'));
    this.f.get("serviceCheckbox.seo")?.setValue(this.activatedRoute.snapshot.queryParamMap.get('seo'));
    this.f.get("serviceCheckbox.publicity")?.setValue(this.activatedRoute.snapshot.queryParamMap.get('publi'));

    this.totalQuoteService.computeWebSiteExtras(
      Number(this.activatedRoute.snapshot.queryParamMap.get('wPages')),
      Number(this.activatedRoute.snapshot.queryParamMap.get('wLang')))
    
    this.totalQuote = this.totalQuoteService.computeTotalQuote(this.clientForm);
  } 

  get f() {
    return this.clientForm;
  }

  get companyServiceList(): CompanyService[] {
    return this.companyServicesList.companyServices
  }

  get clientData(): ClientData[] {
    return this.clientDataList.clientData
  }

  computeTotalPrice() {
    if (!this.f.get('serviceCheckbox.website')?.value) {
      this.totalQuoteService.computeWebSiteExtras(0, 0);
    }
    this.totalQuote = this.totalQuoteService.computeTotalQuote(this.clientForm);

    this.formIsValid();
    this.appendQueryParam();
  }

  formIsValid() {
    if (this.f.get('serviceCheckbox.website')?.value) {
      if (this.f.valid && this.panelComponent?.panelIsValid()) {
        this.isValidForm = true;
      } else {
        this.isValidForm = false;
      };
    } else {
      if (this.f.valid) {
        this.isValidForm = true;
      } else {
        this.isValidForm = false;
      };
    }
  }

  saveServices(): void {
    if (this.isValidForm) {
      let clienName = this.f.get('clientName')?.value || " ";
      let quoteName = this.f.get('quoteName')?.value || " ";
      this.totalQuoteService.saveClientQuote(this.clientForm, clienName, quoteName);
      this.resetForm();
      this.formIsValid();
      this.clientTableComponent.clientsSortedAsSubmited();
    }
  }

  resetForm() {
    this.clientForm.reset();
    this.panelComponent?.serviceDetailsForm.reset();
  }

  appendQueryParam() {
    let seoParam;
    if(this.f.get("serviceCheckbox.seo")?.value){
      seoParam=true;
    }
    let publiParam;
    if(this.f.get("serviceCheckbox.publicity")?.value){
      publiParam=true;
    }
     let pagesParam;
    if(this.panelComponent?.sf.get('pages')?.value){
      pagesParam=this.panelComponent?.sf.get('pages')?.value;
    }
    let langParam;
    if(this.panelComponent?.sf.get('languages')?.value){
      langParam=this.panelComponent?.sf.get('languages')?.value;
    }
    let webParam;
    if(this.f.get("serviceCheckbox.website")?.value){
      webParam=true;
    } else{
      langParam=null;
      pagesParam=null;
    }

   this.router.navigate(['/home'],
      {
        queryParams: {
          web: webParam,
          seo: seoParam,
          publi: publiParam,
          wPages: pagesParam,
          wLang: langParam,
        }
      })
  };

  getURL() {
    this.clipboard.copy(window.location.href);
  }
}


