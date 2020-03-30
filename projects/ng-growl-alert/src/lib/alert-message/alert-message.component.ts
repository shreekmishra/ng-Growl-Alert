import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertMessage, NgGrowlAlertService } from '../ng-growl-alert.service';

@Component({
  selector: 'alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit, OnDestroy {
  alertMessage: AlertMessage;

  constructor(private alertService: NgGrowlAlertService) { }

  ngOnInit() {
    this.alertService.alertMessageSub.subscribe(msg => {
      this.alertMessage = msg;
    });
  }

  onClickClose(): void {
    if (this.alertMessage.allowClose && !this.alertMessage.isConfirmation) {
      this.closeAlert(null);
    }
  }

  onClickOkay(): void {
    this.closeAlert(true);
  }

  onClickYes(): void {
    this.closeAlert(true);
  }

  onClickNo(): void {
    this.closeAlert(false);
  }

  onClickCancel(): void {
    this.closeAlert(null);
  }

  private closeAlert(response: boolean) {
    this.alertMessage = null;
    this.alertService.alertMessageResponse.next(response);
  }

  canShowHeader(): boolean {
    return ((this.alertMessage.allowClose && !this.alertMessage.isConfirmation) || !!this.alertMessage.alertTitle);
  }

  ngOnDestroy() {
    this.alertService.alertMessageSub.unsubscribe();
  }
}
