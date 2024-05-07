import { Component, OnInit } from '@angular/core'
import { CurrencyService } from './services/currency.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	title = 'hw_09'
	inputValueFrom: number | undefined
	convertedAmountUSD: number | undefined
	convertedAmountAED: number | undefined
	convertedAmountEUR: number | undefined
	convertedAmountCHF: number | undefined
	convertedAmountNZD: number | undefined
	convertedAmountCNY: number | undefined

	constructor(private currencyService: CurrencyService) {}

	ngOnInit() {
		this.currencyService.getData().subscribe(data => {
			console.log('currencyRates', this.currencyService.currencyRates)

			const amountInUAH = 1
			console.log('original (RUB):', amountInUAH)
			const convertedAmount = this.currencyService.convertCurrency(
				amountInUAH,
				'JPY'
			)

			console.log('converted (JPY):', convertedAmount)

			// console.log(this.convert('USD'))
		})
	}

	onValueChange(value: number) {
		this.inputValueFrom = value
		this.convertedAmountUSD = this.convert('USD')
		this.convertedAmountAED = this.convert('AED')
		this.convertedAmountEUR = this.convert('EUR')
		this.convertedAmountCHF = this.convert('CHF')
		this.convertedAmountCNY = this.convert('CNY')
		this.convertedAmountNZD = this.convert('NZD')

		console.log('value from app-input:', this.inputValueFrom)
	}

	convert(currency: string): number | undefined {
		const amount = this.inputValueFrom
		const convertedAmount = this.currencyService.convertCurrency(
			amount!,
			currency
		)
		return convertedAmount ? parseFloat(convertedAmount.toFixed(3)) : undefined
	}
}
