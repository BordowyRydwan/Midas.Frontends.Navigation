import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CookieModule } from "./services/cookie/cookie.module";
import { MaterialModule } from "./modules/material/material.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CookieModule,
    MaterialModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
