import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent, FooterComponent, HeroComponent, BannerComponent} from './';

@NgModule({
	imports: [
		RouterModule,
		CommonModule
	],
	declarations: [
		HeaderComponent,
		HeroComponent,
		FooterComponent,
		BannerComponent
	],
	exports: [
		HeaderComponent,
		HeroComponent,
		FooterComponent,
		BannerComponent
	]
})
export class ComponentsModule { }
