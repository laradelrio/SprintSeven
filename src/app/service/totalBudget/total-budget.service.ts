import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { CompanyService } from 'src/app/interfaces/companyService.interface';

@Injectable({
  providedIn: 'root'
})
export class TotalBudgetService {

  netDays: number = 30;
  websiteExtras: number = 0;
  websitePrice: number = 0;
  seoAndPubliPrice: number = 0;
  totalPrice: number = 0;
  clientQuotes: string[] =[];
  constructor() { }


  

  computeTotalPrice(){
    
 

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
