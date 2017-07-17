import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  formdata = {
    email: '',
    password: '',
    confirm_password: ''
  };
  submitAttempt: boolean = false;
  myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private afauth: AngularFireAuth, public formBuilder: FormBuilder,public alertCtrl:AlertController) {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      confirm_password: ['', Validators.compose([Validators.required])]
    }, {'validator': this.isMatching});
  }

  isMatching(group: FormGroup){
    var firstPassword = group.controls['password'].value;
    var secondPassword = group.controls['confirm_password'].value;
    if((firstPassword && secondPassword) && (firstPassword != secondPassword)){
      console.log("mismatch");
      return { "pw_mismatch": true };
    } else{
      return null;
    }
  }

  async register()
  {
    this.submitAttempt = true;


    if(!this.myForm.valid){
      let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'Password Field Does Not Match',
      buttons: ['OK']
      });
      alert.present();
    }
    else {
      console.log("success!");
      try {
      const result = await this.afauth.auth.createUserWithEmailAndPassword(this.formdata.email,this.formdata.password);
      this.navCtrl.pop();
      } catch (e) {
        console.error(e);
      }
    } 
  }
}
