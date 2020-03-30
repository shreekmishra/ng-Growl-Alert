import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GrowlMessage } from '../../ng-growl-alert.service';

@Component({
  selector: 'growl-message',
  templateUrl: './growl-message.component.html',
  styleUrls: ['./growl-message.component.css']
})
export class GrowlMessageComponent implements OnInit {
  @Input('message') growlMessage: GrowlMessage;
  @Input('index') index: number;
  @Output('closed') closeEventEmitter = new EventEmitter<number>();
  isClosed: boolean = false;

  constructor() { }

  ngOnInit() {
    if (!this.growlMessage.sticky) {
      setTimeout(this.closeGrowl.bind(this), this.growlMessage.timeout);
    }
  }

  closeGrowl() {
    this.isClosed = true;
    setTimeout(args => {
      this.closeEventEmitter.emit(this.index);
    }, 500);

  }

}
