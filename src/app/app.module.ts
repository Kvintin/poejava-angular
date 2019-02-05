import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import { BoxFormComponent } from './components/box-form/box-form.component';
import { DemoComponent } from './components/demo/demo.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BoxFormComponent,
    DemoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
