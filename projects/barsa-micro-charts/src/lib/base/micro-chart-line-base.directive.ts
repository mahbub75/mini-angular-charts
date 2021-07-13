import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {MicroChartBase} from "./micro-chart-base.directive";
import {LineItem} from "../models/line-item";

@Directive(
    {
        selector: '[micro-chart-line]'
    }
)
export class MicroChartLineBaseDirective extends MicroChartBase {
    @Input() line: LineItem;

    constructor(protected  el:ElementRef, protected renderer2: Renderer2) {
        super(el, renderer2);
    }
    protected setOptions(options) {
        this._scaleDownLineData();

        // initialize series
        this._initSeries(options);

// set input data
        this.line.data.forEach((item) => {
            this.xAxis.data.push(item.label);
            const dataObj = {
                value: item.value,
                symbol: 'none',
            }
            options.series[0].data.push(dataObj);
        });
        this.xAxis.max = null;
        this.xAxis.type = 'category';


// set custom yAxis
        this.yAxis.min = 0;
        this.yAxis.max = 6;
        this.yAxis.type = 'value';

    }

    private _scaleDownLineData() {
        const maxValue = Math.max.apply(Math, this.line.data.map((dataItem) => dataItem.value));
        return this.line.data.forEach((dataItem) =>{
            dataItem.value *= (6/maxValue);
        })

    }

    private _initSeries(options) {
        options.series = [
            {
                type: 'line',
                color:this.line?.color,
                data: [],
                label: {
                    show: false,
                }

            },

        ]
    }
}
