import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AboutPage } from '../pages/about/about';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { LocationPage } from '../pages/location/location';
import { AgentPage } from '../pages/agent/agent';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
    AboutPage,
    SearchPage,
    TabsPage,
    LoginPage,
    LocationPage,
    AgentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsPlacement: 'bottom',
	  platforms: {
		android: {
		  tabsPlacement: 'top'
		},
		ios: {
		  tabsPlacement: 'top'
		},
		windows:
		{
		  tabsPlacement: 'top'
		}
	  }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    SearchPage,
    TabsPage,
    LoginPage,
    LocationPage,
    AgentPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
