import { Component, OnInit } from '@angular/core';
// import { globalVariables } from './../app.globals';

@Component({
	selector: 'order-list',
	templateUrl: './order-list.component.html',
	styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
	// data = globalVariables;
	// currentOrder = this.data.orders.currentOrder;

	constructor() { }

	ngOnInit(): void {
	}

}
