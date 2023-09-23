import { Component } from '@angular/core';
import { ClientSummary } from 'src/app/interfaces/clientSummary.interface';
import { RearrangeTableService } from 'src/app/service/rearrangeTable/rearrange-table.service';
import { TotalQuoteService } from 'src/app/service/totalQuote/total-quote.service';

@Component({
  selector: 'app-home-client-quote-list',
  templateUrl: './client-quote-list.component.html',
  styleUrls: ['./client-quote-list.component.scss']
})
export class ClientQuoteListComponent {
  
  clientList: ClientSummary[]=[];

  constructor(
    public totalQuoteService: TotalQuoteService,
    public rearrageTableService: RearrangeTableService,
  ){
    this.clientList = this.totalQuoteService.clients;

  };

  getSortedClientArray(sortType:string){
    if(sortType==="alphabeticallyClient"){
      this.clientList= this.rearrageTableService.clientsAlphabetically;
    }else if( sortType = "alphabeticallyQuote"){
      this.clientList= this.rearrageTableService.quotesAlphabetically;
    } else if(sortType=="byDate"){
      this.clientList = this.rearrageTableService.clientsByDate;
    }else if(sortType==="reset"){
     this.clientsSortedAsSubmited();
    };
  };
  
  clientsSortedAsSubmited(){
    this.clientList = this.totalQuoteService.clients;
  };

  showSearch(searchTerm:string){
    this.clientList = this.totalQuoteService.clients.filter( (client) => client.clientName===searchTerm || client.quoteName ===searchTerm);
    
  }


  // sortAlphabetically(){
  //   this.rearrageTableService.alphabetically();
  //   this.clientList= this.rearrageTableService.clientsAlphabetically;
  // }
  // sortByDate(){
  //   this.rearrageTableService.byDate();
  //   this.clientList = this.rearrageTableService.clientsByDate;
  // }
 

  //take array from the service, reorder it and take the new oerdered on and make the table from that. 
  
  //local storage -- tada
  // save date when submiting client

  }

  

