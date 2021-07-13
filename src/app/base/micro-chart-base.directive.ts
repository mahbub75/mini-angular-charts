import {Directive, OnInit, AfterViewInit, ElementRef, Renderer2} from "@angular/core";
import * as echarts from "echarts/core";
import {GridComponent, LegendComponent, TitleComponent, TooltipComponent, VisualMapComponent} from "echarts/components";
import {BarChart, GaugeChart, LineChart} from "echarts/charts";
import {CanvasRenderer} from "echarts/renderers";
import {GridOption, XAXisOption, YAXisOption} from "echarts/types/dist/shared";
import {AxisBaseOption} from "echarts/types/src/coord/axisCommonTypes";
import {BarSeriesOption, LineSeriesOption} from "echarts";
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
