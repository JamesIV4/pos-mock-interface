import { globalVariables } from './../app.globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'item-picker',
  templateUrl: './item-picker.component.html',
  styleUrls: ['./item-picker.component.scss']
})
export class ItemPickerComponent implements OnInit {
  data = globalVariables;
  entrees = this.data.menu.entrees;
  sides = this.data.menu.sides;
  softDrinks = this.data.menu.drinks.softDrinks;

  constructor() { }

  ngOnInit(): void {
    console.log(this.entrees);
  }

}
