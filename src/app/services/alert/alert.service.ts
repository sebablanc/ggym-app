import { Injectable } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';

const OK_BUTTON: AlertButton =  {
  text: 'OK',
  role: 'confirm',
  handler: () => {
    return true;
  },
}

const CANCEL_BUTTON: AlertButton =  {
  text: 'Cancelar',
  role: 'cancel',
  handler: () => {
    return false;
  },
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private okCancelButtons: AlertButton[] = [
    CANCEL_BUTTON,
    OK_BUTTON
  ];

  private okButtons: AlertButton[] = [
    OK_BUTTON
  ];

  constructor(private alertController: AlertController) { }

  private async basicAlert(title: string, message: string, buttons: (string | AlertButton)[]) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      cssClass: 'white-text',
      buttons: buttons,
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    return role;
  }

  async okCancelAlert(title: string, message: string) {
    const role = await this.basicAlert(title, message, this.okCancelButtons);
    return role === 'confirm';
  }

  async okAlert(title: string, message: string) {
    const role = await this.basicAlert(title, message, this.okButtons);
    return role === 'confirm';
  }
}
