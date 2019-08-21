import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  popOver() {
    this.presentPopover(event);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ButtonComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
