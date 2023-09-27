import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-table-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchTerm = new EventEmitter<string>

  onSearch(term: string) {
    this.searchTerm.emit(term);
  }

  //trigered on click X and hit Enter
  onClear(term: string){
    if(term.length >= 1){
      this.searchTerm.emit(term);
    } else{
      this.searchTerm.emit("");
    }
  }

  //detect when input emptied manually
  onKeyDown(term: string){
    if (term.length===0){
      this.onClear(term);
    }
  }

}
