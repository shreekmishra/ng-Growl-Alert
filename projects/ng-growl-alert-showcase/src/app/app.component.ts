import { Component } from '@angular/core';
import { NgGrowlAlertService, AlertConfirmResponse } from 'projects/ng-growl-alert/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  constructor(private alertService: NgGrowlAlertService) { }

  private analyseAlertResponse(response: AlertConfirmResponse) {
    if (response === AlertConfirmResponse.ALERT_CLOSE) {
      console.log("Alert Box Closed");
    } else if (response === AlertConfirmResponse.ALERT_OKAY) {
      console.log("Okay Clicked on Alert Box");
    } else {
      console.log("Unknown Response");
    }
  }

  private analyseConfirmResponse(response: AlertConfirmResponse) {
    if (response === AlertConfirmResponse.CONFIRM_CANCEL) {
      console.log("Confirm Box Cancelled");
    } else if (response === AlertConfirmResponse.CONFIRM_YES) {
      console.log("Confirmation: YES");
    } else if (response === AlertConfirmResponse.CONFIRM_NO) {
      console.log("Confirmation: NO");
    } else {
      console.log("Unknown Response");
    }
  }

  showAlert1() {
    this.alertService.alert("This is an alert message.").subscribe(value => {
      this.analyseAlertResponse(value);
    });
  }

  showAlert2() {
    this.alertService.alert("This is an alert message with title.", "Alert Message").subscribe(value => {
      this.analyseAlertResponse(value);
    });
  }

  showAlert3() {
    this.alertService.alert("This is an alert message with Cross button.", null, true).subscribe(value => {
      this.analyseAlertResponse(value);
    });
  }

  showAlert4() {
    this.alertService.alert("This is an alert message with title and Cross button.", "Alert Message", true).subscribe(value => {
      this.analyseAlertResponse(value);
    });
  }

  showConfirm1() {
    this.alertService.confirm("This is a confirmation box.").subscribe(value => {
      this.analyseConfirmResponse(value);
    });
  }

  showConfirm2() {
    this.alertService.confirm("This is a confirmation box with title.", "Confirm Dialog").subscribe(value => {
      this.analyseConfirmResponse(value);
    });
  }

  showConfirm3() {
    this.alertService.confirm("This is a confirmation box with cancel.", null, true).subscribe(value => {
      this.analyseConfirmResponse(value);
    });
  }

  showConfirm4() {
    this.alertService.confirm("This is a confirmation box with title and cancel.", "Confirm Dialog with cancel", true).subscribe(value => {
      this.analyseConfirmResponse(value);
    });
  }

  showSuccess1() {
    this.alertService.successGrowl(
      "This is success message."
    );
  }

  showSuccess2() {
    this.alertService.successGrowl(
      ["This is success message 1.", "This is success message 2."]
    );
  }

  showSuccess3() {
    this.alertService.successGrowl(
      ["This is success message 1.", "This is success message 2."],
      "Success Growl Message"
    );
  }

  showSuccess4() {
    this.alertService.successGrowl(
      ["This is success message 1.", "This is success message 2."],
      "Success Growl Message",
      true
    );
  }

  showSuccess5() {
    this.alertService.successGrowl(
      ["This is success message 1.", "This is success message 2."],
      "Success Growl Message",
      5000
    );
  }

  showError1() {
    this.alertService.errorGrowl(
      "This is error message."
    );
  }

  showError2() {
    this.alertService.errorGrowl(
      ["This is error message 1.", "This is error message 2."]
    );
  }

  showError3() {
    this.alertService.errorGrowl(
      ["This is error message 1.", "This is error message 2."],
      "Error Growl Message"
    );
  }

  showError4() {
    this.alertService.errorGrowl(
      ["This is error message 1.", "This is error message 2."],
      "Error Growl Message",
      true
    );
  }

  showError5() {
    this.alertService.errorGrowl(
      ["This is error message 1.", "This is error message 2."],
      "Error Growl Message",
      5000
    );
  }

  showWarning1() {
    this.alertService.warningGrowl(
      "This is warning message."
    );
  }

  showWarning2() {
    this.alertService.warningGrowl(
      ["This is warning message 1.", "This is warning message 2."]
    );
  }

  showWarning3() {
    this.alertService.warningGrowl(
      ["This is warning message 1.", "This is warning message 2."],
      "Warning Growl Message"
    );
  }

  showWarning4() {
    this.alertService.warningGrowl(
      ["This is warning message 1.", "This is warning message 2."],
      "Warning Growl Message",
      true
    );
  }

  showWarning5() {
    this.alertService.warningGrowl(
      ["This is warning message 1.", "This is warning message 2."],
      "Warning Growl Message",
      5000
    );
  }

  showInfo1() {
    this.alertService.infoGrowl(
      "This is info message."
    );
  }

  showInfo2() {
    this.alertService.infoGrowl(
      ["This is info message 1.", "This is info message 2."]
    );
  }

  showInfo3() {
    this.alertService.infoGrowl(
      ["This is info message 1.", "This is info message 2."],
      "Info Growl Message"
    );
  }

  showInfo4() {
    this.alertService.infoGrowl(
      ["This is info message 1.", "This is info message 2."],
      "Info Growl Message",
      true
    );
  }

  showInfo5() {
    this.alertService.infoGrowl(
      ["This is info message 1.", "This is info message 2."],
      "Info Growl Message",
      5000
    );
  }

}
