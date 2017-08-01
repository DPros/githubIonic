import {Component, ViewChild} from '@angular/core';

import {MenuController, Platform, Tabs} from 'ionic-angular';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {BeerListPage} from '../pages/beer-list/beer-list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {BeerDetailsPage} from "../pages/beer-details/beer-details";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Tabs) tabsCtrl: Tabs;

  // make HelloIonicPage the root (or first) page
  pages: Array<{ title: string, component: any }>;
  tabs: Array<{ title: string, root: any }>;
  tabZeroHasBeenLoaded = false;

  constructor(public platform: Platform,
              public menu: MenuController,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      {title: 'Hello Ionic', component: HelloIonicPage},
      {title: 'My First List', component: BeerListPage}
    ];
    this.tabs = [
      { title: "Main", root: HelloIonicPage },
      { title: "Add", root: BeerDetailsPage},
      { title: "Beers", root: BeerListPage }
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    if (this.tabsCtrl.getSelected() !== this.tabsCtrl.getByIndex(0)) {
      this.tabsCtrl.select(0);
    }
    this.tabsCtrl.getByIndex(0).setRoot(page.component);
  }
}
