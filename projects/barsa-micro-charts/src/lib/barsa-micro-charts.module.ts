import { NgModule } from '@angular/core';
import {TileModule} from "@fundamental-ngx/core";
import {TileCircularComponent} from "./tiles-charts/tile-circular/tile-circular.component";
import {TileLineComponent} from "./tiles-charts/tile-line/tile-line.component";
import {TileStackbarComponent} from "./tiles-charts/tile-stackbar/tile-stackbar.component";
import {TileComparisonComponent} from "./tiles-charts/tile-comparison/tile-comparison.component";
import {TileBarComponent} from "./tiles-charts/tile-bar/tile-bar.component";
import {MicroChartAreaBaseDirective} from "./base/micro-chart-area-base.directive";
import {MicroChartStackbarBase} from "./base/micro-chart-stackbar-base.directive";
import {MicroChartBarBaseDirective} from "./base/micro-chart-bar-base.directive";
import {MicroChartCircularBaseDirective} from "./base/micro-chart-circular-base.directive";
import {MicroChartComparisonBaseDirective} from "./base/micro-chart-comparison-base.directive";
import {MicroChartLineBaseDirective} from "./base/micro-chart-line-base.directive";
import {TileAreaComponent} from "./tiles-charts/tile-area/tile-area.component";
import {CommonModule} from "@angular/common";





const components = [
    TileCircularComponent,
    TileLineComponent,
    TileStackbarComponent,
    TileComparisonComponent,
    TileBarComponent,
    TileAreaComponent,
    MicroChartAreaBaseDirective,
    MicroChartStackbarBase,
    MicroChartBarBaseDirective,
    MicroChartCircularBaseDirective,
    MicroChartComparisonBaseDirective,
    MicroChartLineBaseDirective
]

@NgModule({

    declarations: [
        ...components,
    ],
    exports: [
        ...components
    ],
    imports: [
        TileModule,
        CommonModule
    ]

})
export class BarsaMicroChartsModule { }
