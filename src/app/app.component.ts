import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  data:any;
  name:string= 'Dhiraj Dhawle';
  photo:string= '';
  email:string = '';

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any , icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar,private storage: Storage, public splashScreen: SplashScreen,public alertCtrl:AlertController) {
    this.initializeApp();

    this.storage.get('currentuser').then((val) => {
      if(!val)
      {
        this.nav.setRoot(LoginPage);
      }
      else{
        this.data=JSON.parse(val);
        //console.log(this.data.email+" "+this.data.displayName+" "+this.data.photoURL);
        if(this.data.photoURL === null)
        {
          this.photo = 'assets/img/profile.png';
        }else{
          this.photo = this.data.photoURL;
        }
        if(this.data.displayName != null)
        {
          this.name = this.data.displayName;
        }
        if(this.data.email != null)
        {
          this.email=this.data.email;
        }
      }
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      { title: 'List', component: ListPage, icon: "list" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout()
  {
    let confirm = this.alertCtrl.create({
      title: 'Warning!!',
      message: 'Are you Sure to logout.',
      buttons: [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          handler: () => {
            this.storage.remove('currentuser');
            this.nav.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
}