import { Component } from '@angular/core';
import { NgGrowlAlertService } from 'projects/ng-growl-alert/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  constructor (private alertService: NgGrowlAlertService) { }

  
  showAlert1() {
    this.alertService.alert("This is an alert message.").subscribe(value => {
      console.log("showAlert1 = " + value);
    });
  }

  showAlert2() {
    this.alertService.alert("This is an alert message with title.", "Alert Message").subscribe(value => {
      console.log("showAlert2 = " + value);
    });
  }

  showAlert3() {
    this.alertService.alert("This is an alert message with Cross button.", null, true).subscribe(value => {
      console.log("showAlert3 = " + value);
    });
  }

  showAlert4() {
    this.alertService.alert("This is an alert message with title and Cross button.", "Alert Message", true).subscribe(value => {
      console.log("showAlert3 = " + value);
    });
  }

  showConfirm1() {
    this.alertService.confirm("This is a confirmation box.").subscribe(value => {
      console.log("showConfirm1 = " + value);
    });
  }

  showConfirm2() {
    this.alertService.confirm("This is a confirmation box with title.", "Confirm Dialog").subscribe(value => {
      console.log("showConfirm2 = " + value);
    });
  }

  showConfirm3() {
    this.alertService.confirm("This is a confirmation box with cancel.", null, true).subscribe(value => {
      if (value === null) {
        console.log("showConfirm3 = null");
      } else if (value){
        console.log("showConfirm3 = true");
      } else {
        console.log("showConfirm3 = false");
      }
      
    });
  }
  
  showConfirm4() {
    this.alertService.confirm("This is a confirmation box with title and cancel.", "Confirm Dialog with cancel", true).subscribe(value => {
      if (value === null) {
        console.log("showConfirm3 = null");
      } else if (value){
        console.log("showConfirm3 = true");
      } else {
        console.log("showConfirm3 = false");
      }
      
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
