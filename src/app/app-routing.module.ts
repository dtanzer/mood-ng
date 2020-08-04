import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentRegisterComponent } from './user/current-register/current-register.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CurrentLoginComponent } from './user/current-login/current-login.component';

const routes: Routes = [
	{ path: '', component: HomeScreenComponent, pathMatch: 'full', },
	{ path: 'register', component: CurrentRegisterComponent, },
	{ path: 'login', component: CurrentLoginComponent, },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
