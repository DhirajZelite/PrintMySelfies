import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReceiptPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html',
})
export class ReceiptPage {
  firstname:any; lastname:any;
  address1:any; address2:any; address3:any;
  city:any; pincode:any; mobile:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstname = this.navParams.get('firstname');
    this.lastname = this.navParams.get('lastname');
    this.address1 = this.navParams.get('address1');
    this.city = this.navParams.get('city');
    this.pincode = this.navParams.get('pincode');
    this.mobile = this.navParams.get('mobile');
  }

  ionViewDidLoad() {
    console.log("Recipt Page Data"+this.firstname+"  "+this.lastname+"  "+this.address1);
  }

}
