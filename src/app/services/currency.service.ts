import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, tap } from 'rxjs'
import { Data } from '@angular/router'
import { Rates } from '../types/app.interface'

@Injectable({
	providedIn: 'root'
})
export class CurrencyService {
	private apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js'
	public currencyRates: Rates = {}

	constructor(private http: HttpClient) {}

	getData(): Observable<Data> {
		console.log('sending request')
		return this.http.get<Data>(this.apiUrl).pipe(
			tap(data => {
				this.currencyRates = data['Valute']

				console.log('data: ', data)
				console.log('valute: ', data['Valute'])
			}),
			catchError(error => {
				console.error('error: ', error)
				throw error
			})
		)
	}

	convertCurrency(amount: number, currency: string): number | undefined {
		const rate = this.currencyRates[currency]?.Value
		if (rate) {
			return amount / rate
		} else {
			console.error('Error')
			return undefined
		}
	}
}
