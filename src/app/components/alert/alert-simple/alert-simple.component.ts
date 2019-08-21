import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-simple',
  templateUrl: './alert-simple.component.html',
  styleUrls: ['./alert-simple.component.scss'],
})
export class AlertSimpleComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {}

  showAlert() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
