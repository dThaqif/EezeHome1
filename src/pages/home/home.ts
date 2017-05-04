import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { SearchPage } from '../search/search';
import { AccountPage } from '../account/account';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  aboutPage = AboutPage;
  searchPage = SearchPage;
  accountPage = AccountPage;


  constructor(public navCtrl: NavController) { }

}
