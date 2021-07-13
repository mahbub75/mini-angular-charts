import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {MicroChartBase} from "./micro-chart-base.directive";

@Directive(
    {selector: '[micro-chart-circular]'}
)
export class MicroChartCircularBaseDirective extends MicroChartBase {
    @Input() data: number;
    constructor(protected  el:ElementRef, protected renderer2: Renderer2) {
        super(el, renderer2);
    }

    protected setOptions(options) {
        // remove extra data from circular chart
        this._initSeries(options);

        // add data to series
        options.series[0].data.push({value: this.data});
    }

    private _initSeries(options) {
        options.series = [{
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
    }
}
