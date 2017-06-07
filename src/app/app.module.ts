import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
