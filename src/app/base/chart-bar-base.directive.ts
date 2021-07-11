import {Directive, Input} from '@angular/core';
import {ChartBase} from "./chart-base";

@Directive()
export class ChartBarBaseDirective extends ChartBase {

    @Input() data: { value: number; label: string; color?: string }[]

    grid = {
    top: 0,
    bottom: 20,
    left: 0,
    right: 0};
xAxis = {
    data: ['q1', 'q2', 'q3', 'q4'],
    axisLabel: {
        show: true
    }
};
yAxis = {
    axisLabel: {
        show: false
    }
};
series = [{
    name: 'sales',
    type: 'bar',
    data: [5, 20, 36, 10],

}];
    protected setOptions(options) {
        options.grid = this.grid;
        options.xAxis = this.xAxis;
        options.yAxis = this.yAxis;
        options.series = this.series;
    }

}
