import { OrderStatusBarService } from './order-status-bar.service';
import { Injectable } from '@angular/core';
import { globalVariables } from './app.globals';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	data = globalVariables;

	updateCart(operation: string, passedItem: object) {
		switch (operation) {
			case 'add':
				this.data.orders.queue[this.data.orders.currentOrder].items.push(passedItem);
				this.orderStatus.updateTrayHeight();
				break;
			case 'remove':
				const itemIndex = this.data.orders.queue[this.data.orders.currentOrder].items.indexOf(passedItem);
				this.data.orders.queue[this.data.orders.currentOrder].items.splice(itemIndex, 1);
				break;
		
			default:
				break;
		}
	}

	constructor(
		private orderStatus: OrderStatusBarService,
	) { }
}
