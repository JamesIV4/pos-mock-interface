import { Injectable } from '@angular/core';
import { globalVariables } from './app.globals';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  get data() {
		return globalVariables;
	}
}
