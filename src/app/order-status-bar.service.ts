import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class OrderStatusBarService {

	// Re-calculate the tray height and set it
	updateTrayHeight() {
		const trayElem: any = document.querySelector('.order-status');

		if (trayElem.classList.contains('expanded')) {
			// Wait 1ms so the updated height has time to be checked properly after an item is added
			setTimeout(() => {trayElem.style.height = trayElem.scrollHeight + 'px'}, 1);
		}
	}

	constructor() { }
}
