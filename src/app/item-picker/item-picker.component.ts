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

	// Use a class to track the state of the list, opening and closing with a height adjustment
	toggleOpen(event: any, className: string) {
		const hasClass = event.target.classList.contains(className);

		console.dir(event.target.nextSibling);

		if (hasClass) {
			event.target.classList.remove(className);

			event.target.nextSibling.style.height = event.target.nextSibling.scrollHeight + 'px';
		} else {
			event.target.classList.add(className);
			
			// Fix for first-time animation not showing due to missing height property
			event.target.nextSibling.style.height = event.target.nextSibling.scrollHeight + 'px';
			setTimeout(function handle() {
				event.target.nextSibling.style.height = '0px';
			}, 1);
		}
	}
}
