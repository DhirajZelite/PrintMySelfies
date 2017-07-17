import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../model/user";
import { AngularFireAuth } from "angularfire2/auth";
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertControl: AlertController,private afauth:AngularFireAuth) {
  }
  async login(user:User){
    try { 
      this.afauth.auth.signInWithEmailAndPassword(user.email,user.password).then((responce)=>{
        let currentuser = {
          email: responce.email,
          id: responce.id,
          picture: responce.photoUrl
        }
        window.localStorage.setItem('currentuser',JSON.stringify(responce));
        this.navCtrl.setRoot(HomePage);
      }).catch((e)=>{
        let alert = this.alertControl.create({
          title: 'Warning!',
          subTitle: JSON.stringify(e.message),
          buttons: ['OK']
        });
        alert.present();
      });
    } catch (e) {
      console.log(e);
    }
  }

  register()
  {
     this.navCtrl.push(RegisterPage);
  }
}
