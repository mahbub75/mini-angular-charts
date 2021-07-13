import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {MicroChartBase} from "./micro-chart-base.directive";
import {BarItem} from "../models/bar-item";


@Directive(
    {
        selector: '[micro-chart-bar]'
    }
)
export class MicroChartBarBaseDirective extends MicroChartBase {

    @Input() data: BarItem[];

    constructor(protected  el:ElementRef, protected renderer2: Renderer2) {
        super(el, renderer2);
    }
    protected setOptions(options) {
        // initialize series
        this._initSeries(options);

        // set custom grid
        this.grid.bottom = 20;

        // set custom xAxis
        this.xAxis.type = 'category';
        this.xAxis.max = null;
        this.xAxis.axisLabel.show = true
        this.data.forEach(dataItem => {
            this.xAxis.data.push(dataItem.label);
            let dataSeriesItem = {value: dataItem.value, itemStyle: {color: dataItem.color}};
            options.series[0].data.push(dataSeriesItem);
        });

        // set custom yAxis
        this.yAxis.type = "value";

    }
   private _initSeries(options){
        options.series = [{
            type: 'bar',
            data: [],
        }]
    }

}
