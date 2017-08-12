import { Component } from '@angular/core';
import { NavController, NavParams , AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotoProvider } from '../../providers/photo/photo';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  public photos : any;
  base64Image:any;
  data:any;
  id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private alertCtrl:AlertController,public camera: Camera,public photoProvider:PhotoProvider) {
     this.storage.get('currentuser').then((val) => {
       this.data=JSON.parse(val);
       this.id=this.data.uid;
     });
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
      quality: 80, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    }
    this.camera.getPicture(options) .then((imageData) => {
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      // return this.photoProvider.uploadImage(base64Image, this.id);
        // var storageref = firebase.storage().ref('photos/'+"data:image/jpeg;base64," + imageData)
        // storageref.put(imageData);
        this.base64Image = "data:image/jpeg;base64," + imageData;
        // this.upload();
        this.photoProvider.addPhotos(this.base64Image);
        this.photos.push(this.base64Image);
      }, (err) => {
        console.log(err);
    });
  }

  // upload() {
  //   let storageRef = firebase.storage().ref();
  //   // Create a timestamp as filename
  //   const filename = Math.floor(Date.now() / 1000);

  //   // Create a reference to 'images/todays-date.jpg'
  //   const imageRef = storageRef.child(`images/${filename}.jpg`);

  //   imageRef.putString(this.base64Image, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
  //    // Do something here when the data is succesfully uploaded!
  //    let confirm = this.alertCtrl.create({
  //       message: 'Successfully upload',
  //     });
  //     confirm.present();
  //   });

  // }

  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
        title: 'Sure you want to delete this photo?',
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
