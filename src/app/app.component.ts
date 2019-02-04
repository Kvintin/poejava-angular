import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txt = '';
  boxData = [];

  onSave(data) {
    this.boxData.push(data);
  }
}
