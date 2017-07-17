import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {
    // localStorage.removeItem('currentuser');
    if(!this.isLoggedIn())
    {
      this.navCtrl.setRoot(LoginPage);
    }
  }

  isLoggedIn()
  {
    if(localStorage.getItem('currentuser')){
      return true;
    }
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

  itemClick()
  {
    console.log("Item Click");
  }
}
