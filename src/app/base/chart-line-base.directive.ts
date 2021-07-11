import {Directive, Input} from '@angular/core';
import {ChartBase} from "./chart-base";

@Directive()
export class ChartLineBaseDirective extends ChartBase {
    @Input() xAxisData: string[] = [];
    @Input() mainData: number[] = [];
  textStyle = {
        fontSize: 12,
        fontWeight: 'bold',

    };
    xAxis = {
        data: [],
        axisLine: {
            show: false,
        },

        axisTick: {
            show: false,
        },
    };

    yAxis = {

        min: 0,
        max: 6,
        axisLabel: {
            show: false
        },

        splitLine: {
            show: false
        },
    };

   series = [
        {
            type: 'line',
            data: [],
            label: {
                show: false,
            }

        },

    ];
    protected setOptions(options) {

        this.xAxisData.forEach((value)=>{
            const item = {
                value: value,
                textStyle: this.textStyle
            }
            this.xAxis.data.push(item);
        });


        this.mainData.forEach((value)=>{
            const item = {
                value: value,
                symbol: 'none',
            }
            this.series[0].data.push(item);
        });

        options.grid = this.grid;
        options.xAxis = this.xAxis;
        options.yAxis = this.yAxis;
        options.series = this.series
    }

}
