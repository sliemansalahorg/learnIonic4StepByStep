import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { ActionSheetComponent } from '../components/action-sheet/action-sheet.component';
import { AlertSimpleComponent } from '../components/alert/alert-simple/alert-simple.component';
import { AlertConfirmComponent } from '../components/alert/alert-confirm/alert-confirm.component';
import { AlertPromptComponent } from '../components/alert/alert-prompt/alert-prompt.component';
import { AlertRadioComponent } from '../components/alert/alert-radio/alert-radio.component';
import { AlertCheckboxComponent } from '../components/alert/alert-checkbox/alert-checkbox.component';
import { BadgeComponent } from '../components/badge/badge.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomePage,
    ActionSheetComponent,
    AlertSimpleComponent,
    AlertConfirmComponent,
    AlertPromptComponent,
    AlertRadioComponent,
    AlertCheckboxComponent,
    BadgeComponent,
  ]
})
export class HomePageModule {}
