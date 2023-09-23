import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-table-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchTerm = new EventEmitter<string>

  onSearch(term:string){
      this.searchTerm.emit(term);
    
  }

}
