import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
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
          successData => {
            this.chuckQuote = successData;
          },
          errData => {
            console.log(errData);
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
