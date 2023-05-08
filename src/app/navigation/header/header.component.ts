import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() sidenavToggle = new EventEmitter<void>();

  title = 'SlivoVits';

  onToggleSidenav() {
    this.sidenavToggle.emit()
  }
}
