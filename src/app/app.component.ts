import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './../pages/home/home';
import { GeneratedTest } from './../pages/generated-test/generated-test';
import { MenuTest } from './../pages/menu-test/menu-test';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: Array<{title: string, component: any, icon: string}> = [];
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Overlay Components', component: HomePage, icon: ''},
      {title: 'Menu', component: MenuTest, icon: ''},
      {title: 'Generated Teste', component: GeneratedTest, icon: ''}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: any) : void {
    this.rootPage = page.component;
  }

}