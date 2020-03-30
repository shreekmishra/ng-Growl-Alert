import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgGrowlAlertService, GrowlMessage } from '../ng-growl-alert.service';

@Component({
  selector: 'growl-message-list',
  templateUrl: './growl-message-list.component.html',
  styleUrls: ['./growl-message-list.component.css']
})
export class GrowlMessageListComponent implements OnInit, OnDestroy {
  growlMessages: GrowlMessage[] = [];
  constructor(private growlService: NgGrowlAlertService) { }

  ngOnInit() {
    this.growlService.growlMessageSub.subscribe(gMsg => {
      this.growlMessages.push(gMsg);
    });
  }

  onCloseGrowl(index: number) {
    this.growlMessages.splice(index, 1);
  }

  ngOnDestroy () {
    this.growlService.growlMessageSub.unsubscribe();
  }

}
