import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as echarts from "echarts/core";
import {GridComponent, LegendComponent, TitleComponent, TooltipComponent, VisualMapComponent} from "echarts/components";
import {LineChart} from "echarts/charts";
import {CanvasRenderer} from "echarts/renderers";

@Component({
    selector: 'app-tile-line-chart',
    templateUrl: './tile-line.component.html',
    styleUrls: ['./tile-line.component.scss']
})
export class TileLineComponent {

    @Input() double: boolean = false;

    xAxisData = ['june 1', 'june 20', 'june 38', 'june 30'];
    mainData = [2, 4, 3, 5];

    leftLabelsColor = '#71c989';
    rightLabelsColor = '#f66364';
    constructor() {
    }
}
