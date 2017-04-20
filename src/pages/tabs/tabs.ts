import { Component } from '@angular/core';

import { HomePage} from '../home/home';
import { SearchPage} from '../search/search';


@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = SearchPage;
  


  constructor() {
 
  }
  ionViewDidLoad() {
  console.log('ionViewDidLoad TabsPage');
}
}
