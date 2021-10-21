import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { StandingsComponent } from './standings/standings.component';
import { ScoringsComponent } from './scorings/scorings.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StandingsComponent,
    ScoringsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
