export interface CurrencyInfo {
	CharCode: string
	ID: string
	Name: string
	Nominal: number
	NumCode: string
	Previous: number
	Value: number
}

export interface Rates {
	[key: string]: CurrencyInfo
}
