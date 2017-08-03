import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PhotoProvider } from '../../providers/photo/photo';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  count:any;
  price:any;
  tprice:any;
  GST:any;
  total:any;
  shipping:any;
  GST_tax:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public photoProvider:PhotoProvider) {
    this.price = 50;
    this.shipping = 45;
    this.GST_tax = 0.12;
    this.photoProvider.getPhotos().then(result =>{
      this.count = result.length;
    });
  }

  ionViewDidLoad() {
    this.tprice = this.price * this.count;
    this.GST =  this.tprice * this.GST_tax;
    this.total = this.tprice + this.shipping + this.GST;
  }

  getSlip()
  {
    this.navCtrl.push(InfoPage);
  }
}
