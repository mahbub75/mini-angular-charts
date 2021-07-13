import {BrowserModule} from '@angular/platform-browser';
import {NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {BarsaMicroChartsModule} from "../../projects/barsa-micro-charts/src/lib/barsa-micro-charts.module";


@NgModule({

    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
  BarsaMicroChartsModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule {
}
