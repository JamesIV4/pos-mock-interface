import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { PageItemPickerComponent } from './page-item-picker/page-item-picker.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { PageOrderListComponent } from './page-order-list/page-order-list.component';
import { ListDisplayComponent } from './list-display/list-display.component';
import { PageFinalizeOrderComponent } from './page-finalize-order/page-finalize-order.component';

const routes: Routes = [
	{ path: '', component: PageItemPickerComponent },
	{ path: 'orders', component: PageOrderListComponent },
	{ path: 'place-order', component: PageFinalizeOrderComponent },
]

@NgModule({
	declarations: [
		AppComponent,
		PageItemPickerComponent,
		OrderStatusComponent,
		PageOrderListComponent,
		ListDisplayComponent,
		PageFinalizeOrderComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule,
		MatIconModule,
		RouterModule.forRoot(routes),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
