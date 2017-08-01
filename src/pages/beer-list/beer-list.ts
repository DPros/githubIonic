import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

import { BeerDetailsPage } from '../beer-details/beer-details';

@Component({
  selector: 'page-beer-list',
  templateUrl: 'beer-list.html'
})
export class BeerListPage {
  icons: string[];
  items: Array<{name: string, brand: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        name: 'Item ' + i,
        brand: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(BeerDetailsPage, {
      item: item
    });
  }
}
