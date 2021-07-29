import { DatabaseService } from './database.service';
import { OrderStatusBarService } from './order-status-bar.service';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	updateCart(operation: string, passedItem: object, index: number) {
		// Use the reverse of the index supplied, since the list is rendered in reverse. This is to avoid using unshift for adding items to the top
		const indexReverse = this.database.data.orders.queue[this.database.data.orders.currentOrder].items.length - 1 - index;

		switch (operation) {
			case 'add':
				this.database.data.orders.queue[this.database.data.orders.currentOrder].items.push(passedItem);
				this.orderStatus.updateTrayHeight();
				break;
				case 'remove':
					this.database.data.orders.queue[this.database.data.orders.currentOrder].items.splice(indexReverse, 1);
					this.orderStatus.updateTrayHeight();
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
