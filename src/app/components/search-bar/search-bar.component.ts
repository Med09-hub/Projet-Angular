import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input() search = 'Initial';
  @Output() searchChange = new EventEmitter<string>();
  @Output('submit') searchButtonClicked = new EventEmitter();

  searchClick() {
    this.searchButtonClicked.emit();
  }
  updateSearch(value: string) {
    this.searchChange.emit(value);
  }
}
