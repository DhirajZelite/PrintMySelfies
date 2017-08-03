import { Component } from '@angular/core';
import { NavController, NavParams , AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotoProvider } from '../../providers/photo/photo';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  public photos : any;
  base64Image:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController,public camera: Camera,public photoProvider:PhotoProvider) {
    this.getCamera();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CameraPage');
  // }

  ionSelected() {
    this.getCamera();
  }

  ngOnInit() {
    this.photos = [];
  }

  getCamera()
  {
    const options : CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photoProvider.addPhotos(this.base64Image);
        this.photos.push(this.base64Image);
      }, (err) => {
        console.log(err);
    });
  }

  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
        title: 'Sure you want to delete this photo? There is NO undo!',
        message: '',
        buttons: [
          {
            text: 'No',
          }, {
            text: 'Yes',
            handler: () => {
              this.photos.splice(index, 1);
            }
          }
        ]
      });
    confirm.present();
  }

  doRefresh(refresher) {
    
    setTimeout(() => {
      this.ngOnInit();
      this.getCamera();
      refresher.complete();
    }, 2000);
  }
}
