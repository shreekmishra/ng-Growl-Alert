import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { AlertConfirmResponse, AlertMessage } from '../ng-growl-alert.service';

@Component({
  selector: 'alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit, AfterViewInit {
  @Input('message') alertMessage: AlertMessage;
  @Output('onClose') close: EventEmitter<AlertConfirmResponse> = new EventEmitter<AlertConfirmResponse>();
  @ViewChild('okayBtn', { static : false }) okayBtnEle : ElementRef;
  @ViewChild('yesBtn', { static : false }) yesBtnEle : ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.alertMessage);
  }

  onEscape(event : KeyboardEvent){
    if(event.code == "Escape") {
      this.onClickClose();
    }
  }

  onClickClose(): void {
    if (this.alertMessage.allowClose && !this.alertMessage.isConfirmation) {
      this.closeAlert(AlertConfirmResponse.ALERT_CLOSE);
    }
  }

  ngAfterViewInit() {
    if(this.alertMessage.isConfirmation){
      this.yesBtnEle.nativeElement.focus();
    } else {
      this.okayBtnEle.nativeElement.focus();
    }
  }

  onClickOkay(): void {
    this.closeAlert(AlertConfirmResponse.ALERT_OKAY);
  }

  onClickYes(): void {
    this.closeAlert(AlertConfirmResponse.CONFIRM_YES);
  }

  onClickNo(): void {
    this.closeAlert(AlertConfirmResponse.CONFIRM_NO);
  }

  onClickCancel(): void {
    this.closeAlert(AlertConfirmResponse.CONFIRM_CANCEL);
  }

  private closeAlert(response: AlertConfirmResponse) {
    console.log('Alert Box Response: ' + response);
    this.close.emit(response);
  }

  canShowHeader(): boolean {
    return ((this.alertMessage.allowClose && !this.alertMessage.isConfirmation) || !!this.alertMessage.alertTitle);
  }

}
