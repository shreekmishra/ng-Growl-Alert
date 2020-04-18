import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

export class AlertMessage {
  alertMessage: string;
  alertTitle?: string;
  isConfirmation?: boolean = false;
  allowClose?: boolean = false;
  allowCancel?: boolean = false;
}

export enum GrowlState {
  DEFAULT = "default",
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
  INFO = "info"
}

export interface GrowlMessage {
  messages: string[];
  title?: string;
  state?: GrowlState;
  sticky?: boolean;
  shadow?: boolean;
  timeout?: number;
}

export enum AlertConfirmResponse {
  ALERT_OKAY = "O",
  ALERT_CLOSE = "C",
  CONFIRM_CANCEL = "C",
  CONFIRM_YES = "Y",
  CONFIRM_NO = "N"
}

@Injectable({ providedIn: 'root' })
export class NgGrowlAlertService {
  /**
   * This one is triggered when new Alert or Confirm box is shown.
   */
  alertMessageSub = new Subject<AlertMessage>();

  /**
   * This one is triggered when a new Growl message is show.
   */
  growlMessageSub = new Subject<GrowlMessage>();

  /**
   * This triggered when use takes action on Alert box.
   */
  alertMessageResponse = new Subject<AlertConfirmResponse>();

  constructor() { }

  /**
   * Open an alert box.
   * @param message Message to display in alert box.
   * @param title Title for alert box (Default: null)
   * @param allowClose If true, a cross button on top right corner to close the box. (Default: false)
   * @returns Observable to subscripe with response, true if user clicked Okay else null 
   */
  alert(message: string, title?: string, allowClose?: boolean): Subject<AlertConfirmResponse> | Observable<AlertConfirmResponse> {
    return this.openDialog({ alertMessage: message, alertTitle: title, allowClose: allowClose, isConfirmation: false, allowCancel: false });
  }

  /**
   * Open a Confirmation box
   * 
   * @param message Message to display in alert box.
   * @param title Title for alert box (Default: null)
   * @param allowCancel If true, a cancel button will be given to cancel the confirmation. (Default: false)
   * 
   * @returns Observable to subscribe with response, true if user clicked 'Yes', false if user clicked 'No' and null if user clicked 'Cancel'
   */
  confirm(message: string, title?: string, allowCancel?: boolean): Subject<AlertConfirmResponse> | Observable<AlertConfirmResponse> {
    return this.openDialog({ alertMessage: message, alertTitle: title, allowClose: false, allowCancel: allowCancel, isConfirmation: true });
  }

  private openDialog(alertMessage: AlertMessage): Subject<AlertConfirmResponse> | Observable<AlertConfirmResponse> {
    this.alertMessageSub.next(alertMessage);
    return this.alertMessageResponse.pipe(take(1));
  }

  successGrowl(message: string | string[], title?: string, duration?: boolean | number) {
    this.showGrowl(message, title, GrowlState.SUCCESS, duration);
  }

  errorGrowl(message: string | string[], title?: string, duration?: boolean | number) {
    this.showGrowl(message, title, GrowlState.ERROR, duration);
  }

  infoGrowl(message: string | string[], title?: string, duration?: boolean | number) {
    this.showGrowl(message, title, GrowlState.INFO, duration);
  }

  warningGrowl(message: string | string[], title?: string, duration?: boolean | number) {
    this.showGrowl(message, title, GrowlState.WARNING, duration);
  }

  private showGrowl(message: string | string[], title?: string, state: GrowlState = GrowlState.DEFAULT, duration: boolean | number = 3000) {
    let growlMessage: GrowlMessage = {
      messages: (message instanceof Array) ? message : [message],
      title: title,
      state: state,
      sticky: duration == true,
      shadow: true,
      timeout: (typeof duration === "boolean") ? 3000 : duration
    };
    this.displayGrowl(growlMessage);
  }

  private displayGrowl(growlMessage: GrowlMessage) {
    this.growlMessageSub.next(growlMessage);
  }

}
