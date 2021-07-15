import { Component, OnInit } from '@angular/core';
import { globalVariables } from './../app.globals';

@Component({
	selector: 'item-picker',
	templateUrl: './item-picker.component.html',
	styleUrls: ['./item-picker.component.scss']
})
export class ItemPickerComponent implements OnInit {
	data = globalVariables;
	currentOrder = this.data.orders.currentOrder;

	constructor() { }

	ngOnInit(): void {}

	addItem(passedItem: any) {
		this.data.orders.list[this.currentOrder].items.push(passedItem);
	}

	// Use a class to track the state of the list, opening and closing with a CSS transition on height
	animateOpenClose(event: any, className: string) {
		let headerButton: any;

		// Choose the correct target to deal with bubbling
		switch (event.target.nodeName) {
			case 'H1':
				headerButton = event.target.parentElement;
				break;
			case 'MAT-ICON':
				headerButton = event.target.parentElement.parentElement;
				break;
		}

		const hasClass = headerButton.classList.contains(className);

		// If 'closed' class is present
		if (hasClass) {
			headerButton.classList.remove(className); // Remove 'closed' class
			headerButton.nextSibling.style.height = headerButton.nextSibling.scrollHeight + 'px';

			// After animation is done playing, remove height property to keep responsive behavior of list
			setTimeout(() => {headerButton.nextSibling.style.removeProperty('height')}, 500);
		} else {
			headerButton.classList.add(className); // Add 'closed' class
			
			// Before animation plays, set the height property so the transition will play properly
			headerButton.nextSibling.style.height = headerButton.nextSibling.scrollHeight + 'px';
			setTimeout(() => {headerButton.nextSibling.style.height = '0px'}, 1);
		}
	}
}
