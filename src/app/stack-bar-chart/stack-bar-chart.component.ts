import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as echarts from 'echarts/core';
import {GridComponent, LegendComponent, TitleComponent, TooltipComponent, VisualMapComponent} from 'echarts/components';
import {BarChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';
import {BarSeriesOption, ComposeOption, GridComponentOption, LineSeriesOption, TitleComponentOption} from 'echarts';

@Component({
    selector: 'app-stack-bar-chart',
    templateUrl: './stack-bar-chart.component.html',
    styleUrls: ['./stack-bar-chart.component.scss']
})
export class StackBarChartComponent implements OnInit, AfterViewInit {

    myChart: any;

    constructor() {

    }


    ngOnInit() {
        echarts.use(
            [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer, VisualMapComponent, LegendComponent]
        );
    }

    ngAfterViewInit() {
        const color1 = 'red';
        const color2 = 'yellow';
        const color3 = 'green';

        const chartDom = document.getElementById('stack-bar');
        if (chartDom) {
            this.myChart = echarts.init(chartDom);
        }
        const textStyle = {
            verticalAlign: 'bottom',
            fontSize: 12,
            distance: 100,
            fontWeight: 'bold'
        };
        const option = {
            grid: {
                top: 10,
                bottom: 0,
                left: 50,
                right: 0
            },
            xAxis: {
                boundaryGap: ['0%', '50%'],
                axisLabel: {
                    show: false
                },
                max: 100,
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                offset: 10,
                data: [
                    {
                        value: 'تاخیر',
                        textStyle
                    },
                    {
                        value: 'هم اکنون',
                        textStyle
                    }, {
                        value: 'بموقع',
                        textStyle
                    }],
                axisLabel: {
                    show: true,
                    inside: true,
                    lineHeight: 16,
                },
                axisLine: {
                    show: false
                },

                axisTick: {show: false}
            },
            plotOptions: {

                bar: {
                    horizontal: true,
                    distributed: true,
                }

            },
            series: [{
                showBackground: true,
                barWidth: 3,
                type: 'bar',

                data: [{
                    value: 5, itemStyle: {
                        color: color1
                    },
                    label: {offset: [114, 0]}
                }, {
                    value: 45, itemStyle: {
                        color: color2
                    },
                    label: {offset: [84, 0]}
                }, {
                    value: 100, itemStyle: {
                        color: color3
                    },
                    label: {offset: [47, 0]}
                }],
                label: {
                    show: true,
                    precision: 1,
                    position: 'top',
                    distance: 0,
                    valueAnimation: true,
                    fontFamily: 'monospace',
                    formatter: (d) => {
                        return d.data.value + '%';
                    },
                }

            }],

        };

        this.myChart.setOption(option);
        option.grid.left = 20;
        this.myChart.setOption(option);

    }
}
