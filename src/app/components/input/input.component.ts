import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output
} from '@angular/core'

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrl: './input.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
	@Input() countryFlag: string = ''
	@Input() sign: string = ''
	@Input() value?: number
	@Output() valueChange: EventEmitter<number> = new EventEmitter<number>()

	onInputChange(newValue: number) {
		this.valueChange.emit(newValue)
	}

	constructor() {}
}
