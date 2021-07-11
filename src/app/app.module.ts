import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TileModule} from '@fundamental-ngx/core';
import { TileCircularComponent } from './tiles-charts/tile-circular/tile-circular.component';
import { TileLineComponent } from './tiles-charts/tile-line/tile-line.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { TileStackbarComponent } from './tiles-charts/tile-stackbar/tile-stackbar.component';
import { ChartStackbarComponent } from './chart-stackbar/chart-stackbar.component';
import { ChartLineComponent } from './chart-line/chart-line.component';
import {ChartCircularComponent} from "./chart-circular/chart-circular.component";
import { TileComparisonComponent } from './tiles-charts/tile-comparison/tile-comparison.component';
import { ChartComparisonComponent } from './chart-comparison/chart-comparison.component';
import {  } from './base/chart-comparison-base.directive';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { TileBarComponent } from './tiles-charts/tile-bar/tile-bar.component';
import { ChartAreaComponent } from './chart-area/chart-area.component';
import { TileAreaComponent } from './tiles-charts/tile-area/tile-area.component';


@NgModule({
    declarations: [
        AppComponent,
        TileCircularComponent,
        TileLineComponent,
        AreaChartComponent,
        TileStackbarComponent,
        ChartStackbarComponent,
        ChartLineComponent,
        ChartCircularComponent,
        TileComparisonComponent,
        ChartComparisonComponent,
        ChartBarComponent,
        TileBarComponent,

        ChartAreaComponent,
        TileAreaComponent,
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
