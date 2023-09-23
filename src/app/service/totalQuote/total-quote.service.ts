import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceTotals } from 'src/app/interfaces/serviceTotals.interface';
import { CompanyServicesService } from '../companyServices/company-services.service';
import { ClientSummary } from 'src/app/interfaces/clientSummary.interface';

@Injectable({
  providedIn: 'root'
})
export class TotalQuoteService {

  clients: ClientSummary[]= [];

  netDays: number = 30;
  websiteExtras: number = 0;
  totalQuoteSum: number = 0;

  pages: number = 0;
  languages: number = 0;
  purchasedServices: string[] = [];

  constructor(  public companyServicesList: CompanyServicesService,){ }

  computeTotalQuote(clientForm: FormGroup): number {

    this.totalQuoteSum = 0;
    let purchasedServices: string[] = [];

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
        serviceTotals[serviceId] += servicePrice;
        purchasedServices.push(serviceId);
      }
    });

    Object.values(serviceTotals).forEach((service) => this.totalQuoteSum += service);
    this.purchasedServices = purchasedServices

    return this.totalQuoteSum+ this.websiteExtras;
  }

  computeWebSiteExtras(pages: number, languages: number):void {
    this.websiteExtras = pages * languages * this.netDays;
    this.pages = pages;
    this.languages = languages
  }

  saveClientQuote(clientForm: FormGroup, clientName: string, quoteName:string){
    
    let quote = 0;
    let services: string[]=[];
    let pages = 0;
    let languages = 0;
    let formSubmitionDate: Date = new Date();

    let client: ClientSummary = {
      clientName : "", 
      quoteName : "",
      quote : 0,
      date: new Date, 
      services : this.purchasedServices,
    } 
       
    if(clientForm.get('serviceCheckbox.website')?.value){
      client = {
        clientName : clientName.toLowerCase(), 
        quoteName : quoteName.toLowerCase(),
        quote : this.totalQuoteSum,
        date: formSubmitionDate,
        services : this.purchasedServices,
        pages : this.pages,
        languages : this.languages,
      }
      console.log(client)
    } else{
        client = {
          clientName : clientName, 
          quoteName : quoteName,
          quote : this.totalQuoteSum,
          date: formSubmitionDate,
          services : this.purchasedServices,
        }  
    }
    this.clients.push(client);
    console.log("clients array ", this.clients);
  };
  

}

