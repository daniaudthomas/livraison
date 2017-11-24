import { Component, ViewEncapsulation } from '@angular/core';
import { Item } from './models/items';
import { Config } from './config';
import { Item as ItemComponent } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],

  encapsulation: ViewEncapsulation.None


})
export class AppComponent {
  private title: string;
  private version: string;
  private collection: [Item];
  private newItem: Item;

  //private newItem: {reference:string, name:string, state:number}

  constructor() {
    //this.title = 'Application Livreur!';
    this.title = Config.APP_TITLE;
    this.version = Config.APP_VERSION;
    this.collection = [
      new Item({ reference: '1234', name: 'Thomas', state: 0 }),
      new Item({ reference: '3456', name: 'Gaëlle', state: 1 }),
      new Item({ reference: '6789', name: 'Cassiopée', state: 2 }),
    ];
    this.resetNewItem();
  }
  resetNewItem() {
    this.newItem = new Item({ reference: '', name: '', state: 0 });

  }
  onGetDetails(item) {
    console.log(item);
  }

  createObject() {

    this.collection.push(this.newItem);
    this.resetNewItem();
  }
}
