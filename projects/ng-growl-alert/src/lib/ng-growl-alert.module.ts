import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgGrowlAlertComponent } from './ng-growl-alert.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { GrowlMessageListComponent } from './growl-message-list/growl-message-list.component';
import { GrowlMessageComponent } from './growl-message-list/growl-message/growl-message.component';



@NgModule({
  declarations: [NgGrowlAlertComponent, AlertMessageComponent, GrowlMessageListComponent, GrowlMessageComponent],
  imports: [
    CommonModule
  ],
  exports: [NgGrowlAlertComponent]
})
export class NgGrowlAlertModule { }
