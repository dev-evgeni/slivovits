import { Component } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SlivoVits';
  data: any;

  private URL = 'assets/data.json';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(this.URL).subscribe(
      data => this.data = data
    );
  }
}
