import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as echarts from "echarts/core";
import {GridComponent, LegendComponent, TitleComponent, TooltipComponent, VisualMapComponent} from "echarts/components";
import {LineChart} from "echarts/charts";
import {CanvasRenderer} from "echarts/renderers";


@Component({
    selector: 'app-area-chart',
    templateUrl: './area-chart.component.html',
    styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit, AfterViewInit {

    @Input() double: boolean = false;
    @ViewChild('chart', {static: false}) chart: ElementRef;

    constructor() {

    }


    ngOnInit() {
        echarts.use(
            [TitleComponent, TooltipComponent, GridComponent, CanvasRenderer, VisualMapComponent, LegendComponent, LineChart]
        );
    }

    ngAfterViewInit() {
        // const chartDom = document.getElementById('tile-stackbar');
        if (this.chart.nativeElement) {
            this.renderChart(this.chart.nativeElement);
        }
    }

    renderChart(chartDom: HTMLElement) {
        const myChart = echarts.init(chartDom);
        // const textStyle = {
        //     fontSize: 12,
        //     fontWeight: 'bold',
        //
        // };
        const grid = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        };
        const xAxis = {

            data: [
                {
                    value: 'june 1',
                    // textStyle
                },
                {
                    value: 'june 20',
                    // textStyle,
                    // axisPointer: {
                    //     show: false
                    // }

                },
                {
                    value: 'june 27',
                    // textStyle,
                    // axisPointer: {
                    //     show: false
                    // }

                }, {
                    value: 'june 30',
                    // textStyle
                }
            ],
            axisLabel: {
                // interval: 2,
                // showMaxLabel: true,
                // showMinLabel: true
                show: false
            },
            axisLine: {
                show: false,
            },

            axisTick: {
                show: false,
            },


        };
        const yAxis = {
            splitNumber: 3,
            min: 0,
            max: 6,
            // splitArea: {
            //     show: true,
            //     areaStyle: {
            //         color: ['red', 'yellow', 'green']
            //     }
            // },

            axisLabel: {
                show: false
            },

            splitLine: {
                show: false
            },
        };

        const series = [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: {
                    color: '#71c989',
                },
                itemStyle: {
                    color: '#71c989'
                },
                emphasis: {
                    focus: 'series'
                },
                data: [{
                    value: 2.5,
                    symbol: 'none',

                }, {
                    value: 2.5,
                    symbol: 'none',

                }, {
                    value: 2.5,
                    symbol: 'none',

                }, {
                    value: 2.5,
                    symbol: 'none',

                }]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: {
                    color: '#f5b04d',
                },
                itemStyle: {
                    color: '#f5b04d'
                },
                emphasis: {
                    focus: 'series'
                },
                data: [{
                    value: 2,
                    symbol: 'none',

                }, {
                    value: 2,
                    symbol: 'none',

                }, {
                    value: 2,
                    symbol: 'none',

                }, {
                    value: 2,
                    symbol: 'none',

                }]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                areaStyle: {
                    color: '#f66364',
                },
                itemStyle: {
                    color: '#f66364'
                },
                emphasis: {
                    focus: 'series'
                },
                data: [{
                    value: 1.5,
                    symbol: 'none',

                }, {
                    value: 1.5,
                    symbol: 'none',

                }, {
                    value: 1.5,
                    symbol: 'none',

                }, {
                    value: 1.5,
                    symbol: 'none',

                }]
            },
            {
                type: 'line',
                data: [{
                    value: 2,
                    symbol: 'none',

                }, {
                    value: 4,
                    symbol: 'none',
                }, {
                    value: 3,
                    symbol: 'none',
                },
                    {
                        value: 5,
                        symbol: 'none',
                    }],
                label: {
                    show: false,
                }

            },
        ];

        const option = {
            grid: grid,
            xAxis: xAxis,
            yAxis: yAxis,
            series: series,
        };

        myChart.setOption(option);


    }
}
