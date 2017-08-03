import { Component } from '@angular/core';
import { NavController, NavParams , AlertController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { PhotoProvider } from '../../providers/photo/photo';


@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {
  public photos : any;
  base64Image:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private imagePicker:ImagePicker,public photoProvider:PhotoProvider) {
    this.getImage();
  }

 ngOnInit() {
    this.photoProvider.getPhotos().then(result =>{
      console.log(result);
      this.photos = result;
    });
  }

  ionSelected() {
    this.getImage();
  }

  getImage()
  {
    var options = {
      maximumImagesCount: 10,
      width: 800,
      height: 800,
      quality: 80,
      outputType: 1
      //destinationType: this.camera.DestinationType.DATA_URL,
      //outputType: this.imagePicker.outputType.BASE64_STRING
    };
    this.imagePicker.getPictures(options).then((results) => {
    for (var i = 0; i < results.length; i++) {
      this.photoProvider.addPhotos(results[i]);
      //this.base64Image[i] = 'data:image/jpeg;base64,' + results[i];
      // this.base64Image = "data:image/jpeg;base64," + results[i];
      //console.log('Image URI: ' + results[i]);
    }
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
      this.photoProvider.refresh();
      this.ngOnInit();
      this.getImage();
      refresher.complete();
    }, 2000);
  }

  getOrder()
  {
    this.photoProvider.addPhotos('../assets/img/slider2.jpg');
  }
}
