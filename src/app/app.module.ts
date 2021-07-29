//import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
//import { environment } from 'src/environments/environment';
import { ListDisplayComponent } from './list-display/list-display.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { OrderStatusComponent } from './order-status/order-status.component';
import { PageFinalizeOrderComponent } from './page-finalize-order/page-finalize-order.component';
import { PageItemPickerComponent } from './page-item-picker/page-item-picker.component';
import { PageOrderListComponent } from './page-order-list/page-order-list.component';
import { RouterModule, Routes } from '@angular/router'

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
		//AngularFireModule.initializeApp(environment.firebaseConfig),
		//AngularFirestoreModule,
		MatIconModule,
		RouterModule.forRoot(routes, {
			useHash: false
		}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
