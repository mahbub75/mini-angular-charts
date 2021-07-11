import {Directive, Input} from '@angular/core';
import {ChartBase} from "./chart-base";

@Directive()
export class ChartCircularBaseDirective extends ChartBase{
@Input() data: number;

    series = [{
        type: 'gauge',
        progress: {
            show: true,
            width: 5
        },
        axisLine: {

            lineStyle: {
                width: 5
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            length: 15,

            lineStyle: {
                width: 2,
                color: '#999'
            }
        },
        axisLabel: {
            distance: 30,
            color: '#999',
            fontSize: 10,
            show: false
        },
        anchor: {
            show: true,
            showAbove: true,
            size: 15,
            itemStyle: {
                borderWidth: 1
            }
        },
        title: {
            show: false
        },
        detail: {
            valueAnimation: true,
            fontSize: 12,
            offsetCenter: [0, '70%']
        },
        data: []
    }];

    protected setOptions(options) {
        delete options.xAxis;
        delete options.yAxis;
        delete options.grid;

        this.series[0].data.push({value: this.data});
        options.series = this.series;
        console.log(this.series[0]);
    }

}
