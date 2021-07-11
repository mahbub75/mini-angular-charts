import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as echarts from 'echarts/core';
import {
    BarChart
} from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent
} from 'echarts/components';
import {
    CanvasRenderer
} from 'echarts/renderers';
import {BarSeriesOption, ComposeOption, GridComponentOption, LineSeriesOption, TitleComponentOption} from 'echarts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {


    myChart: any;

    constructor() {

    }


    ngOnInit() {
        echarts.use(
            [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]
        );
    }

    ngAfterViewInit() {
     //   const chartDom = document.getElementById('bar-chart');
      //if (chartDom) {
     //       this.myChart = echarts.init(chartDom);
      //  }

        const option: ComposeOption<BarSeriesOption | LineSeriesOption | TitleComponentOption | GridComponentOption> = {

            grid: {
                top: 0,
            bottom: 20,
            left: 0,
            right: 0},
            xAxis: {
                data: ['q1', 'q2', 'q3', 'q4'],
                axisLabel: {
                    show: true
                }
            },
            yAxis: {
                axisLabel: {
                    show: false
                }
            },
            series: [{
                name: 'sales',
                type: 'bar',
                data: [5, 20, 36, 10],

            }]
        };

        //this.myChart.setOption(option);
    }

}



