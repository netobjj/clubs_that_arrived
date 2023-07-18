import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewClubArrivedComponent } from './new-club-arrived/new-club-arrived.component';
import { ChartAssociationsComponent } from './chart-associations/chart-associations.component';
import { LastClubArrivedComponent } from './last-club-arrived/last-club-arrived.component';

@NgModule({
  declarations: [
    AppComponent,
    NewClubArrivedComponent,
    ChartAssociationsComponent,
    LastClubArrivedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
