import { Component } from '@angular/core';

import {NavParams, Tabs} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'page-beer-details',
  templateUrl: 'beer-details.html'
})
export class BeerDetailsPage {
  selectedItem: any;
  form: FormGroup;

  constructor(public navParams: NavParams, public tabs: Tabs, public formBuilder: FormBuilder) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    var item = this.selectedItem ? this.selectedItem : {};
    this.form = formBuilder.group({
      name: [item.name || '', Validators.required],
      brand: [item.brand || '', Validators.required]
    });
  }

  closeBeerForm(){
    this.tabs.select(this.tabs.previousTab());
  }

  saveBeer(){
    console.log(this.form.value)
  }
}
