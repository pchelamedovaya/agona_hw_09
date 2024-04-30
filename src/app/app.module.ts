import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { InputComponent } from './components/input/input.component'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [AppComponent, InputComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
