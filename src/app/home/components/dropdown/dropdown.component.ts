import { Component, EventEmitter, Output } from '@angular/core';
import { RearrangeTableService } from 'src/app/service/rearrangeTable/rearrange-table.service';

@Component({
  selector: 'app-home-table-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Output() rearrangeTable = new EventEmitter<string>();

   testList=10;

   
  constructor(
    private rearrangeTableService: RearrangeTableService){

    }

  sortAlphabeticallyClient(){
    this.rearrangeTableService.alphabeticallyClient()
    this.sortRequest("alphabeticallyClient");
  }
  
  sortAlphabeticallyQuote(){
    this.rearrangeTableService.alphabeticallyQuote();
    this.sortRequest("alphabeticallyQuote");
  }

  sortByDate(){
    this.rearrangeTableService.byDate()
    this.sortRequest("byDate");
  }

  resetOrder(){
    this.sortRequest("reset");
  }

  sortRequest(sortType: string){
    this.rearrangeTable.emit(sortType);
  };
}
