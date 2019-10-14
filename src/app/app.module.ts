import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeminaryComponent } from './seminary/seminary.component';
import { DetailsComponent } from './details/details.component';

import { SeminaryDatesService } from './seminary-dates.service'

@NgModule({
  declarations: [
    AppComponent,
    SeminaryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SeminaryDatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
