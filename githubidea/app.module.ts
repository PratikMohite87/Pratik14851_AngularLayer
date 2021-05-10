import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { SectionsComponent } from './sections/sections.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitlebarComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
