import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ItemPickerComponent } from './item-picker/item-picker.component';
import { OrderStatusComponent } from './order-status/order-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemPickerComponent,
    OrderStatusComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
