import { DatabaseService } from './../database.service';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'order-status',
	templateUrl: './order-status.component.html',
	styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

	constructor(
		public cart: CartService,
		public database: DatabaseService,
	) { }

	ngOnInit(): void {
	}

	get orderTotal() {
		let total = 0;

		this.database.data.orders.queue[this.cart.currentOrder].items.forEach((item: any) => {
			total += item.price;
		});

		return Math.round(total * 100) / 100;
	}

	// Use a class to track the state of the tray, opening and closing with a CSS transition on height
	expandTray(event: any, className: string) {
		let trayElem: any;

		// Choose the correct target to deal with bubbling
		switch (event.target.nodeName) {
			case 'DIV':
				trayElem = event.target;
				break;
			case 'H1':
				trayElem = event.target.parentElement;
				break;
			case 'SPAN':
				trayElem = event.target.parentElement.parentElement;
				break;
			case 'UL':
				trayElem = event.target.parentElement;
				break;
			case 'LI':
				trayElem = event.target.parentElement.parentElement;
				break;
			case 'MAT-ICON':
				return;
		}

		const hasClass = trayElem.classList.contains(className);

		// If 'expanded' class is present
		if (hasClass) {
			trayElem.classList.remove(className); // Remove 'expanded' class
			trayElem.style.height = '55px'
		} else {
			trayElem.classList.add(className); // Add 'expanded' class
			trayElem.style.height = trayElem.scrollHeight + 'px';
		}
	}
}
