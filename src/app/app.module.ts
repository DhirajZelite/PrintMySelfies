import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { GalleryPage } from '../pages/gallery/gallery';
import { ImagePage } from '../pages/image/image';
import { CameraPage } from '../pages/camera/camera';
import { OrderPage } from '../pages/order/order';
import { PhotoProvider } from '../providers/photo/photo';
import { InfoPage } from '../pages/info/info';
import { ReceiptPage } from '../pages/receipt/receipt';


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCSv148sA_jKH041tkOMWhUVXzJlPtgIGc",
    authDomain: "printmyselfies.firebaseapp.com",
    databaseURL: "https://printmyselfies.firebaseio.com",
    projectId: "printmyselfies",
    storageBucket: "",
    messagingSenderId: "239906907975"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    GalleryPage,
    CameraPage,
    ImagePage,
    OrderPage,
    InfoPage,
    ReceiptPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    GalleryPage,
    CameraPage,
    ImagePage,
    OrderPage,
    InfoPage,
    ReceiptPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhotoProvider
  ]
})
export class AppModule {}
