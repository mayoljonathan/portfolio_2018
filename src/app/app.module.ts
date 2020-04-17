import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import 'hammerjs';
// import { NgxGalleryModule } from 'ngx-gallery';

// NOT USING
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

// MODULES
import { ComponentsModule } from './shared/components/components.module';

// SERVICES
import { DataService, HelperService } from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    // NgxGalleryModule,
    LazyLoadImageModule,
  ],
  providers: [DataService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
