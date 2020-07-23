import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		EmojiModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
