import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgGrowlAlertService, AlertMessage } from './ng-growl-alert.service';
import { Subscription } from 'rxjs';
import { AlertConfirmResponse } from 'ng-growl-alert/public-api';

@Component({
  selector: 'ng-growl-alert',
  templateUrl: './ng-growl-alert.component.html',
  styleUrls: ['./ng-growl-alert.component.css']
})
export class NgGrowlAlertComponent implements OnInit, OnDestroy {
  alertMessage: AlertMessage;
  private alertMessageSub: Subscription;
  constructor(private alertService: NgGrowlAlertService) { }

  ngOnInit() {
    this.alertMessageSub = this.alertService.alertMessageSub.subscribe( msg => {
      this.alertMessage = msg;
    })
  }

  alertClose(response : AlertConfirmResponse) {
    this.alertService.alertMessageResponse.next(response);
    this.alertMessage = null;
  }

  ngOnDestroy() {
    this.alertMessageSub.unsubscribe();
  }


}
