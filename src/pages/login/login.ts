import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public emailField: any;
  public passwordField: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  signIn() {
    let alert = this.alertCtrl.create({
      title: "Welcome to the EezeHome Family1",
      subTitle: "Registration is successful",
      buttons: ['close']
    });
    alert.present();
  }

  registerUser() {
    let alert = this.alertCtrl.create({
      title: "Registration is successful",
      subTitle: "Welcome to EezeHome!",
      buttons: ['close']
    });
    alert.present();
  }
  ionViewDidLoad() {
        console.log('ionViewDidLoad Login');
      }

}
