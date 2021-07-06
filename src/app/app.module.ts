import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TileModule} from '@fundamental-ngx/core';
import { CircularChartComponent } from './circular-chart/circular-chart.component';
import { StackBarChartComponent } from './stack-bar-chart/stack-bar-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        CircularChartComponent,
        StackBarChartComponent
           ],
    imports: [
               BrowserAnimationsModule,
        BrowserModule,

        AppRoutingModule,
        TileModule

    ],

    bootstrap: [AppComponent],
})
export class AppModule {
}
