import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class OrderStatusBarService {

	// Re-calculate the tray height and set it
	updateTrayHeight() {
		const trayElem: any = document.querySelector('.order-status');
		const listElem: any = trayElem.childNodes[1].childNodes[0];
		
		if (trayElem.classList.contains('expanded')) {
			// Wait 1ms so the updated height has time to be checked properly after an item is added
			setTimeout(() => {
			trayElem.style.height = listElem.clientHeight + 73 + 'px'
		
			console.dir(trayElem);
			console.dir(listElem);
		}, 1);
		}
	}

	constructor() { }
}
