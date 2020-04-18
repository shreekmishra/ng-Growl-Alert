import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgGrowlAlertService, GrowlMessage } from '../ng-growl-alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'growl-message-list',
  templateUrl: './growl-message-list.component.html',
  styleUrls: ['./growl-message-list.component.css']
})
export class GrowlMessageListComponent implements OnInit, OnDestroy {
  growlMessages: GrowlMessage[] = [];
  private growlMessageSub : Subscription;

  constructor(private growlService: NgGrowlAlertService) { }

  ngOnInit() {
    this.growlMessageSub = this.growlService.growlMessageSub.subscribe(gMsg => {
      this.growlMessages.push(gMsg);
    });
  }

  onCloseGrowl(index: number) {
    this.growlMessages.splice(index, 1);
  }

  ngOnDestroy () {
    this.growlMessageSub.unsubscribe();
  }

}
