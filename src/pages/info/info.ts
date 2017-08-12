import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { ReceiptPage } from '../receipt/receipt';
/**
 * Generated class for the InfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  firstname: '';
  lastname: '';
  address1: '';
  address2: '';
  address3: '';
  city:'';
  pincode:'';
  mobile:'';
  myForm: FormGroup;
  post:any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      address1: ['', Validators.compose([Validators.required])],
      address2:'', address3:'', city:'',
      pincode: ['',Validators.maxLength(7)],
      mobile: ['', Validators.compose([Validators.required,Validators.maxLength(10)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  addPost(post)
  {
     this.firstname = post.firstname;
     this.lastname = post.lastname;
     this.address1 = post.address1;
     this.address2 = post.address2;
     this.address3 = post.address3;
     this.mobile = post.mobile;
     this.pincode = post.pincode;
     this.city = post.city;
     this.navCtrl.push(ReceiptPage,{
       firstname:this.firstname, lastname:this.lastname, address1:this.address1, address2:this.address2, address3:this.address3,
       city:this.city, pincode:this.pincode, mobile:this.mobile
     });
     console.log(this.firstname+" "+this.lastname+" "+this.address1+" "+this.address2+" "+this.address3+" "+this.city+" "+this.pincode+" "+this.mobile);
  }
}
