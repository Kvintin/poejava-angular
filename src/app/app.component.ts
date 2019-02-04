import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  txt = '';
  boxData = [];

  chuckQuote = {
    category: '',
    id: '',
    icon_url: '',
    url: '',
    value: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://api.chucknorris.io/jokes/random')
        .subscribe(
          data => {
            this.chuckQuote = data;
          }
        );
  }

  onSave(data) {
    this.boxData.push(data);
  }

  onDelete(index) {
      // Do some what ?
      this.boxData.splice(index, 1);
  }
}
