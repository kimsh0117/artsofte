import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CreateComponent } from './create/create.component';
import { HistoryComponent } from './history/history.component';

import { HistoryService } from './history.service'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CreateComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }


