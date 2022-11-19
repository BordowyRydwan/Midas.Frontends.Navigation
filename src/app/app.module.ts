import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CookieModule } from "./services/cookie/cookie.module";
import { MaterialModule } from "./modules/material/material.module";
import { AppRoutingModule } from './app-routing.module';
import { NotLoggedMenuComponent } from './components/not-logged-menu/not-logged-menu.component';
import { LoggedMenuComponent } from './components/logged-menu/logged-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NotLoggedMenuComponent,
    LoggedMenuComponent,
  ],
  imports: [
    BrowserModule,
    CookieModule,
    MaterialModule,
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
