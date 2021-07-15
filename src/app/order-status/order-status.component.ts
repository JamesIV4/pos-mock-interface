import { Component, OnInit } from '@angular/core';
import { globalVariables } from './../app.globals';

@Component({
	selector: 'order-status',
	templateUrl: './order-status.component.html',
	styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {
	data = globalVariables;
	currentOrder = this.data.orders.currentOrder;

	constructor() { }

	ngOnInit(): void {
	}

	get orderTotal() {
		let total = 0;

		this.data.orders.list[this.currentOrder].items.forEach((item) => {
			total += item.price;
		});

		return Math.round(total * 100) / 100;
	}

	removeItem(passedItem: any) {
		const itemIndex = this.data.orders.list[this.currentOrder].items.indexOf(passedItem);
		console.log(itemIndex);

		this.data.orders.list[this.currentOrder].items.splice(itemIndex, 1);
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
			trayElem.style.height = trayElem.scrollHeight + 25 + 'px';
			
		}
	}

	updateTrayHeight() {
		const trayElem = document.querySelector('.order-status');
	}
}
