import {Directive, ElementRef, Renderer2} from "@angular/core";
import {AxisBaseOption} from "echarts/types/src/coord/axisCommonTypes";
import {ChartBase} from "./chart-base.directive";

@Directive()
export abstract class MicroChartBase extends ChartBase{
    xAxis: AxisBaseOption= {
        data: [],
        type: 'value',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        max: 100
    };
    yAxis: AxisBaseOption= {
        data: [],
        type: 'category',
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }

    protected constructor(protected el: ElementRef, protected renderer2: Renderer2) {
            super(el, renderer2);

    }


    protected abstract setOptions(options);
}
