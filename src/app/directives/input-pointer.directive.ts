import { Directive, Input } from '@angular/core'

@Directive({
	selector: 'appInputPointer, [appInputPointer]',
	host: {
		class: 'inputVisibilityDir',
		'[class.inputVisibilityDir--auto]': 'theme === "auto"',
		'[class.inputVisibilityDir--none]': 'theme === "none"'
	}
})
export class InputPointerDirective {
	@Input() theme: 'auto' | 'none' = 'none'

	constructor() {}
}
