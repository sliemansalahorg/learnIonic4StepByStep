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
  ngOnInit() {
  }
}
