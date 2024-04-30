import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, tap } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class CurrencyService {
	private apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js'

	constructor(private http: HttpClient) {}

	getData(): Observable<any> {
		console.log('sending request')
		return this.http.get<any>(this.apiUrl).pipe(
			tap(data => console.log('data: ', data)),
			catchError(error => {
				console.error('error: ', error)
				throw error
			})
		)
	}
}
