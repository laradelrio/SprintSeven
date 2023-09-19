import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceTotals } from 'src/app/interfaces/serviceTotals.interface';
import { CompanyServicesService } from '../companyServices/company-services.service';

@Injectable({
  providedIn: 'root'
})
export class TotalQuoteService {

  // netDays: number = 30;
  // websiteExtras: number = 0;
  // websitePrice: number = 0;
  // seoAndPubliPrice: number = 0;
  // totalPrice: number = 0;
  // clientQuotes: string[] =[];
  
  

  totalQuoteSum: number = 0;

  constructor(  public companyServicesList: CompanyServicesService,){ }

  computeTotalQuote(clientForm: FormGroup): number {

    this.totalQuoteSum = 0;

    let serviceObject = clientForm.get('serviceCheckbox')?.value;
    let cloneService = { ...serviceObject };

    const serviceList = this.companyServicesList.companyServices;

    let serviceTotals: ServiceTotals = {
      website: 0,
      seo: 0,
      publicity: 0,
    }

    Object.entries(cloneService).forEach(function (entries) {

      let serviceId: string = entries[0];
      let checked = entries[1];

      let listServiceObject = serviceList.find((obj: { id: string; }) => { return obj.id === serviceId });
      let servicePrice = (listServiceObject?.price) || 0;

      if (checked) {
        serviceTotals[serviceId] += servicePrice;;
      }
    });

    Object.values(serviceTotals).forEach((service) => this.totalQuoteSum += service);

    return this.totalQuoteSum;
  }

  

  // computeTotalPrice(service: CompanyService): number {
 
  //       if (service.id !== "website") {
  //         if (service.checked) {
  //           this.seoAndPubliPrice += service.price;
  //         } else {
  //           this.seoAndPubliPrice -= service.price;
  //         }
  //       } else {
  //         this.websitePrice = 0;
  //         if (service.checked) {
  //           this.websitePrice += service.price + this.websiteExtras;
  //         }
  //       }
    
  //       this.seoAndPubliPrice + this.websitePrice
  //       return this.totalPrice = this.seoAndPubliPrice + this.websitePrice;
    
  //     }
    
}
//  
//   computeWebSiteExtras(pages: number, languages: number):void {
//     this.websiteExtras = pages * languages * this.netDays;
//   }

//   getTotalPrice(){
//     return this.totalPrice;
//   }

//   // saveQuotes(client){
//   //   this.clientQuotes.push(client);
    
//   // }
// }
