import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'page-finalize-order',
	templateUrl: './page-finalize-order.component.html',
	styleUrls: ['./page-finalize-order.component.scss']
})
export class PageFinalizeOrderComponent implements OnInit {

	constructor(
		public cart: CartService,
	) { }

	ngOnInit(): void {
	}

}
