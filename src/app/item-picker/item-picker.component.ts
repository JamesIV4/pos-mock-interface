import { globalVariables } from './../app.globals';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'item-picker',
	templateUrl: './item-picker.component.html',
	styleUrls: ['./item-picker.component.scss']
})
export class ItemPickerComponent implements OnInit {
	data = globalVariables;
	panelEntreesOpenState = false;
	panelSidesOpenState = false;
	panelDrinksOpenState = false;

	constructor() { }

	ngOnInit(): void {}

	// Use a class to track the state of the list, opening and closing with a CSS transition on height
	animateOpenClose(event: any, className: string) {
		const hasClass = event.target.classList.contains(className);

		// If 'closed' class is present
		if (hasClass) {
			event.target.classList.remove(className); // Remove 'closed' class
			event.target.nextSibling.style.height = event.target.nextSibling.scrollHeight + 'px';

			// After animation is done playing, remove height to keep responsive behavior of list
			setTimeout(function animCleanup() {
				event.target.nextSibling.style.removeProperty('height');
			}, 500);
		} else {
			event.target.classList.add(className); // Add 'closed' class
			
			// Before animation plays, set the height property so the transition will play properly
			event.target.nextSibling.style.height = event.target.nextSibling.scrollHeight + 'px';
			setTimeout(function beginAnim() {
				event.target.nextSibling.style.height = '0px';
			}, 1);
		}
	}
}
