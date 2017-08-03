import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {
  }

  imgClick()
  {
    let confirm = this.alertCtrl.create({
      title: 'Use this Image Plan?',
      message: 'Do you agree to use this Image to print?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  itemClick()
  {
    this.navCtrl.push(GalleryPage);
  }
}
