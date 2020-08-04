import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { DisplayCompactComponent } from './mood/display-compact/display-compact.component';
import { AllCurrentComponent } from './feed/all-current/all-current.component';
import { CurrentRegisterComponent } from './user/current-register/current-register.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CurrentLoginComponent } from './user/current-login/current-login.component';

@NgModule({
	declarations: [
		AppComponent,
		DisplayCompactComponent,
		AllCurrentComponent,
		CurrentRegisterComponent,
		HomeScreenComponent,
		CurrentLoginComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		EmojiModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
