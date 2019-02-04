import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import { BoxFormComponent } from './components/box-form/box-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BoxFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
