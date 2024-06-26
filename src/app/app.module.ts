import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { InputComponent } from './components/input/input.component'
import { FormsModule } from '@angular/forms';
import { InputPointerDirective } from './directives/input-pointer.directive'

@NgModule({
	declarations: [AppComponent, InputComponent, InputPointerDirective],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
