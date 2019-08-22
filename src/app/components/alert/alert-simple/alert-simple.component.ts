import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-alert-simple',
  templateUrl: './alert-simple.component.html',
  styleUrls: ['./alert-simple.component.scss'],
})
export class AlertSimpleComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {}

  showAlert() {
    this.alertService.presentSimpleAlert();
  }
}
