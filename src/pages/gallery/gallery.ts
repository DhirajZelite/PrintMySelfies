import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams , Navbar } from 'ionic-angular';
import { ImagePage } from '../image/image';
import { CameraPage } from '../camera/camera';
import { PhotoProvider } from '../../providers/photo/photo';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  @ViewChild(Navbar) navBar: Navbar;
  photos:any;
  tab1Root = ImagePage;
  tab2Root = CameraPage;

  constructor(public navCtrl: NavController,public photoProvider:PhotoProvider) {
    this.photoProvider.getPhotos().then(result =>{
      this.photos = result;
    });
  }

  getOrder()
  {
    this.navCtrl.push(OrderPage);
  }

  ionViewWillLeave() {
    this.photoProvider.refresh();
  }
  
  
  // ionViewDidLoad() {
  //   this.navBar.backButtonClick = (e:UIEvent)=>{
  //    console.log("hiiii");
  //    this.navCtrl.pop();
  //   }
  // }
  // openlist()
  // {
  //   let confirm = this.alertCtrl.create({
  //     title: 'Use this Image Plan?',
  //     message: 'Do you agree to use this Image to print?',
  //     buttons: [
  //       {
  //         text: 'Disagree',
  //         handler: () => {
  //           console.log('Disagree clicked');
  //         }
  //       },
  //       {
  //         text: 'Agree',
  //         handler: () => {
  //           console.log('Agree clicked');
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }
}
