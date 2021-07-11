import {Directive, OnInit, AfterViewInit, ElementRef} from "@angular/core";
import * as echarts from "echarts/core";
import {GridComponent, LegendComponent, TitleComponent, TooltipComponent, VisualMapComponent} from "echarts/components";
import {BarChart, GaugeChart, LineChart} from "echarts/charts";
import {CanvasRenderer} from "echarts/renderers";
import {XAXisOption, YAXisOption} from "echarts/types/dist/shared";
import {AxisBaseOption} from "echarts/types/src/coord/axisCommonTypes";

@Directive()
export abstract class ChartBase implements OnInit, AfterViewInit {
    grid = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };
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
    };
    series:any[]=[];
    options: {
        grid: any,
        xAxis: any,
        yAxis: any,
        series: any
    };
    chart: any;

    protected constructor(protected el: ElementRef) {
    }

    ngOnInit() {
        // to do
        // customize echart components
        this._initializeOptions();
        echarts.use(
            [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer, VisualMapComponent, LegendComponent, LineChart, GaugeChart]
        );
    }

    ngAfterViewInit(): void {
        this.setOptions(this.options);
        setTimeout(() => {
            this.chart = echarts.init(this.el.nativeElement);
            this._renderChart();
        }, 0)
    }

    private _initializeOptions() {
        this.options = {
            grid: this.grid,
            xAxis: this.xAxis,
            yAxis: this.yAxis,
            series: this.series
        }
    }

    private _renderChart() {
        this.chart.setOption(this.options);
    }

    protected abstract setOptions(options);
}
