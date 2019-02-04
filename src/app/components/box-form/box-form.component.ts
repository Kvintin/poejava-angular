import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.css']
})
export class BoxFormComponent implements OnInit {
  @Output() dataOutput = new EventEmitter();

  form = {
    title: '',
    content: '',
    toggle: false
  };

  constructor() { }

  ngOnInit() { }

  valid(): boolean {
    return this.form.title !== '' && this.form.content !== '';
  }

  onAdd() {
    if (this.valid()) {
      this.dataOutput.emit({...this.form, date: new Date()});
      this.form.title = '';
      this.form.content = '';
    }
  }
}
