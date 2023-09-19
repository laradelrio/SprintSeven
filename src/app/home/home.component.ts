import { Component, ViewChild } from '@angular/core';
import { CompanyServicesService } from '../service/companyServices/company-services.service';
import { CompanyService } from '../interfaces/companyService.interface';
import { TotalQuoteService } from '../service/totalQuote/total-quote.service';
import { ClientQuoteFormComponent } from './components/client-quote-form/client-quote-form.component';
import { PanelComponent } from './components/panel/panel.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../service/FormValidationService/form-validation-service.service';
import { ServiceTotals } from '../interfaces/serviceTotals.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  totalQuote: number = 0;


  clientForm = new FormGroup({
   
    serviceCheckbox: new FormGroup(
      {
      website: new FormControl(false),
      seo: new FormControl(false),
      publicity: new FormControl(false),
      }, this.formValidationService.requireCheckboxesToBeCheckedValidator()
    ),
     
    name: new FormControl('',[Validators.required,Validators.minLength(2)]),
    quote: new FormControl('',  [Validators.required, Validators.min(200)]),
  
  })

  constructor(
    public formValidationService: FormValidationService,
    public companyServicesList: CompanyServicesService,
    public totalQuoteService: TotalQuoteService,
    ){}   

    get f(){
      return this.clientForm;
    }

    get companyServiceList(): CompanyService[]{
      return this.companyServicesList.companyServices
    }
  
    computeTotalPrice() {
         
        this.totalQuote = this.totalQuoteService.computeTotalQuote(this.clientForm)
    
    }
      
     
    
      saveServices():void{
        let spreadServicesChecked = [...[this.f.get('serviceCheckbox')?.value]]
      }

     
      
    
    // computeTotalPrice(service:CompanyService){

    //   this.totalPrice= this.computeTotalPrice
    //   this.totalPrice = this.totalBudget.computeTotalPrice(service);
    //   this.clientFormComponent.fillClientQuote(this.totalPrice);
    // }

  // @ViewChild(ClientQuoteFormComponent) clientFormComponent!: ClientQuoteFormComponent;
  // @ViewChild(PanelComponent) panelComponent!: PanelComponent;
  // panelResetValue: number= 0
  // totalPrice: number = 0;
  // noServiceSelected: boolean = false;

  
     
  //   // change service checked status and redirect
  //   isChecked(event:any, service:CompanyService){
   
  //     if(!event.target.checked){
  //       this.noServiceSelected = true;
  //       service.checked = false;
  //       this.computeTotalPrice(service);
       
  //     }else if (event.target.checked) {
  //       this.noServiceSelected = false;
  //       service.checked = true;
  //       this.totalBudget.computeWebSiteExtras(0,0);
  //       this.computeTotalPrice(service);    
  //     }
  //   }

  //   computeTotalPrice(service:CompanyService){
  //     this.totalPrice = this.totalBudget.computeTotalPrice(service);
  //     this.clientFormComponent.fillClientQuote(this.totalPrice);
  //   }
    
  // formIsValid() {
  //   let companyService = this.companyServicesList.companyServices
  //   let client = [];
  //   let services = []
  //   debugger
  //   //se is websiteChecked
  //   if (companyService[0].checked) {
  //     console.log("website checked");
  //     //see if webdetails valid, and if so send
  //     if (this.panelComponent.serviceDetailsForm.valid) {
  //       services.push({ "website": this.panelComponent.serviceDetailsForm.value })
  //       console.log("website", this.panelComponent.serviceDetailsForm.value);
  //       // {"pages": this.panelComponent.serviceDetailsForm.get('pages')?.value}, 
  //       // {"lanugages": this.panelComponent.serviceDetailsForm.get('languages')?.value}

  //       console.log("clientQutoe w-e", services);
  //     } else {
  //       this.panelComponent.serviceDetailsForm.markAllAsTouched();
  //       console.log("website pannel invalid")
  //     }
  //   } else {
  //     //alert(form invalid)
  //     console.log("website not checked")
  //   }
  
  //   //check if other services checked adn save if so save it
  //   for(let i = 1; i<companyService.length ; i++) {
  //     if (companyService[i].checked) {
  //       services.push(companyService[i].name);
  //       console.log(services);
  //     }
  //   }

  //   //check if soem service checked
  //   if (services.length > 0) {
  //     console.log("service", services)
  //     this.noServiceSelected = false;
  //     if (this.clientFormComponent.clientQuoteForm.valid) {
  //       client.push({ "Client Summary": this.clientFormComponent.clientQuoteForm.value }),
  //         client.push({ "services": services })
  //       console.log(this.clientFormComponent.clientQuoteForm.value)
  //       console.log(JSON.stringify(client))
  //     }
  //    } else {
  //       this.noServiceSelected = true;
  //       this.clientFormComponent.clientQuoteForm.markAllAsTouched();
  //       console.log("form invalid, due to no services, or client details")
  //     };
  //     console.log
  //     // this.totalBudget.saveQuotes(client);
  //   }
 
  }



