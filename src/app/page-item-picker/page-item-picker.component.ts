import { DatabaseService } from './../database.service';
import { CartService } from '../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'page-item-picker',
	templateUrl: './page-item-picker.component.html',
	styleUrls: ['./page-item-picker.component.scss']
})
export class PageItemPickerComponent implements OnInit {

	constructor(
		public cart: CartService,
		public database: DatabaseService,
	) { }

	ngOnInit(): void {}

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
