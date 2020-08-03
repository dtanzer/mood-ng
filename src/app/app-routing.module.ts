import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentRegisterComponent } from './user/current-register/current-register.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
	{ path: '', component: HomeScreenComponent, pathMatch: 'full', },
	{ path: 'register', component: CurrentRegisterComponent, },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
