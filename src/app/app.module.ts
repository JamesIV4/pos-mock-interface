import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ItemPickerComponent } from './item-picker/item-picker.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
	{ path: 'main', component: ItemPickerComponent },
	{ path: '', redirectTo: '/main', pathMatch: 'full' },
	{ path: 'orders', component: OrderListComponent },
]

@NgModule({
	declarations: [
		AppComponent,
		ItemPickerComponent,
		OrderStatusComponent,
		OrderListComponent
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
