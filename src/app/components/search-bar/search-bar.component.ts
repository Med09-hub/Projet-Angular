import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output()searchButtonClicked =new EventEmitter();

	searchClick() {
		this.searchButtonClicked.emit() ;
	}
}
