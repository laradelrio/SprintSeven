import { Injectable } from '@angular/core';
import { TotalQuoteService } from '../totalQuote/total-quote.service';
import { ClientSummary } from 'src/app/interfaces/clientSummary.interface';

@Injectable({
  providedIn: 'root'
})
export class RearrangeTableService {
  clientsAlphabetically: ClientSummary[] = [];
  quotesAlphabetically: ClientSummary[] = [];
  clientsByDate: ClientSummary[] = [];


  constructor(private totalQuoteService: TotalQuoteService) {
  }

  get clientArray(): ClientSummary[] {
    return this.totalQuoteService.clients;
  }

  alphabeticallyClient() {
    this.clientsAlphabetically = this.clientArray.slice();

    this.clientsAlphabetically.sort(function (a, b) {
      if (a.clientName > b.clientName) {
        return 1;
      }
      if (a.clientName < b.clientName) {
        return -1
      }
      return 0;
    })
  };

  alphabeticallyQuote() {
    this.quotesAlphabetically = this.clientArray.slice();

    this.quotesAlphabetically.sort(function (a, b) {
      if (a.quoteName > b.quoteName) {
        return 1;
      }
      if (a.quoteName < b.quoteName) {
        return -1
      }
      return 0;
    })
  };

  byDate() {
    this.clientsByDate = this.clientArray.slice();

    this.clientsAlphabetically.sort(function (a, b) {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1
      }
      return 0;

    })
  };

};





