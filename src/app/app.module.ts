import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Location } from '../providers/location';
import { User } from '../providers/user';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AboutPage } from '../pages/about/about';
import { SearchPage } from '../pages/search/search';
import { LoginPage } from '../pages/login/login';
import { LocationPage } from '../pages/location/location';
import { AgentPage } from '../pages/agent/agent';
import { AccountPage } from '../pages/account/account';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    SearchPage,
    LoginPage,
    LocationPage,
    AgentPage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    SearchPage,
    LoginPage,
    LocationPage,
    AgentPage,
    AccountPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    User,
    Location,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
