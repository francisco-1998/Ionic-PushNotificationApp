import { Component } from '@angular/core';
import { PushNotiService } from '../services/push-noti.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public pushService:PushNotiService) {}

}
