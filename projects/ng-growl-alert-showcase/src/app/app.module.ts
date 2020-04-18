import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgGrowlAlertModule } from 'projects/ng-growl-alert/src/lib/ng-growl-alert.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgGrowlAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
