import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public modalController: ModalController) { }
  modal;
  ngOnInit() {
  }

  async presentModal() {
     this.modal = await this.modalController.create({
      component: AboutPage,
    });
     return await this.modal.present();
  }
}
