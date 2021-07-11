import {Directive, Input} from '@angular/core';
import {ChartBase} from "./chart-base";

@Directive()
export class ChartLineBaseDirective extends ChartBase {
    @Input() xAxisData: string[] = [];
    @Input() mainData: number[] = [];


    protected setOptions(options) {
        // initialize series
        this._initSeries(options);
// set custom xAxis
        this.xAxisData.forEach((value) => {
            this.xAxis.data.push(value);
        });
        this.xAxis.max = null;
        this.xAxis.type = 'category';

// set custom yAxis
        this.yAxis.min = 0;
        this.yAxis.max = 6;
        this.yAxis.type = 'value';

        // set custom series
        this.mainData.forEach((value) => {
            const item = {
                value: value,
                symbol: 'none',
            }
            options.series[0].data.push(item);
        });

    }

   private _initSeries(options) {
        options.series = [
            {
                type: 'line',
                data: [],
                label: {
                    show: false,
                }

            },

        ]
    }
}
