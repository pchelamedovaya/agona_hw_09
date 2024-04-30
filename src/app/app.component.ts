import { Component, OnInit } from '@angular/core'
import { CurrencyService } from './services/currency.service'
import { Rates, Values } from './types/app.interface'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	title = 'hw_09'
	rates: Rates = {}
	values: Values = {
		ruValue: undefined,
		usValue: undefined,
		jpValue: undefined,
		inValue: undefined,
		chValue: undefined
	}

	constructor(private currencyService: CurrencyService) {}

	ngOnInit() {
		this.currencyService.getData().subscribe(data => {})
	}

	updateValues(value: number) {
		for (const key in this.values) {
			if (this.values.hasOwnProperty(key)) {
				this.values[key] = value
			}
		}
	}
}
