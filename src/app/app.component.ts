import { Component } from '@angular/core';
import { globalVariables } from './app.globals';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'posMockInterface';
	variables = globalVariables;
}
