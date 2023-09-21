import { Component } from '@angular/core';
import { TotalQuoteService } from 'src/app/service/totalQuote/total-quote.service';

@Component({
  selector: 'app-home-client-quote-list',
  templateUrl: './client-quote-list.component.html',
  styleUrls: ['./client-quote-list.component.scss']
})
export class ClientQuoteListComponent {

  constructor(
    public totalQuoteService: TotalQuoteService,
  ){}

  get clientList(){
    return this.totalQuoteService.clients
  }

  }

  

