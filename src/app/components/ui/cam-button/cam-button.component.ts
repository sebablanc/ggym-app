import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BarcodeScanner, Barcode, IsGoogleBarcodeScannerModuleAvailableResult } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { BarcodeModel } from 'src/app/models/barcodeModel';

@Component({
  selector: 'app-cam-button',
  templateUrl: './cam-button.component.html',
  styleUrls: ['./cam-button.component.scss'],
})
export class CamButtonComponent  implements OnInit {
  @Output('data') barcodeData: EventEmitter<BarcodeModel> = new EventEmitter();
  
  isSupported = false;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.isGoogleBarcodeScannerModuleAvailable().then(
      data => {
        if(!data.available) {
          BarcodeScanner.installGoogleBarcodeScannerModule().then(_ => {
            BarcodeScanner.isSupported().then((result) => {
              this.isSupported = result.supported;
            });
          })
        }
      }
    )
  }

  async isGoogleBarcodeScannerModuleAvailable(): Promise<IsGoogleBarcodeScannerModuleAvailableResult> {
    return await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
  }

  async scan(): Promise<void> {

    const granted = await this.requestPermissions();
    if (!granted) {
      await this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodeData.emit(this.parseData(barcodes[0].displayValue));
  }

  parseData(value: string): BarcodeModel {
    const valueSplitted = value.split('@');
    return {
      name: valueSplitted[2],
      lastName: valueSplitted[1],
      docNumber: valueSplitted[4]
    }
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
