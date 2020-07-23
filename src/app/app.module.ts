import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { DisplayCompactComponent } from './mood/display-compact/display-compact.component';

@NgModule({
	declarations: [
		AppComponent,
		DisplayCompactComponent
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
