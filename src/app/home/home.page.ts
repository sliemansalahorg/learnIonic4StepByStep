import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ActionSheetComponent } from '../components/action-sheet/action-sheet.component';

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
      component: ActionSheetComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
