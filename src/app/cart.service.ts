import { DatabaseService } from './database.service';
import { OrderStatusBarService } from './order-status-bar.service';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	updateCart(operation: string, passedItem: object, index: number) {
		switch (operation) {
			case 'add':
				this.database.data.orders.queue[this.database.data.orders.currentOrder].items.push(passedItem);
				this.orderStatus.updateTrayHeight();
				break;
			case 'remove':
				this.database.data.orders.queue[this.database.data.orders.currentOrder].items.splice(index, 1);
				break;
		
			default:
				break;
		}
	}

	roundToTenth(value: number) {
		return value.toFixed(2);
	}

	get currentOrder() {
		return this.database.data.orders.currentOrder;
	}

	get subtotal() {
		let subtotal = 0;

		this.database.data.orders.queue[this.currentOrder].items.forEach((item: any) => {
			subtotal += item.price;
		});

		return subtotal;
	}

	get taxes() {
		return this.subtotal * this.database.data.taxes.default;
	}

	get total() {
		return this.subtotal + (this.subtotal * this.database.data.taxes.default);
	}

	constructor(
		private orderStatus: OrderStatusBarService,
		private database: DatabaseService,
	) { }
}
