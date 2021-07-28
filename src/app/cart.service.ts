import { DatabaseService } from './database.service';
import { OrderStatusBarService } from './order-status-bar.service';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	updateCart(operation: string, passedItem: object) {
		switch (operation) {
			case 'add':
				this.database.data.orders.queue[this.database.data.orders.currentOrder].items.push(passedItem);
				this.orderStatus.updateTrayHeight();
				break;
			case 'remove':
				const itemIndex = this.database.data.orders.queue[this.database.data.orders.currentOrder].items.indexOf(passedItem);
				this.database.data.orders.queue[this.database.data.orders.currentOrder].items.splice(itemIndex, 1);
				break;
		
			default:
				break;
		}
	}

	get currentOrder() {
		return this.database.data.orders.currentOrder;
	}

	constructor(
		private orderStatus: OrderStatusBarService,
		private database: DatabaseService
	) { }
}
