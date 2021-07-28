import { DatabaseService } from './../database.service';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'list-display',
	templateUrl: './list-display.component.html',
	styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit {
	currentOrder = this.database.data.orders.currentOrder;

	constructor(
		public cart: CartService,
		public database: DatabaseService,
	) { }

	ngOnInit(): void {
	}

}
