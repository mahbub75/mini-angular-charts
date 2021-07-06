import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as echarts from 'echarts/core';
import {
    BarChart, GaugeChart
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
  selector: 'app-circular-chart',
  templateUrl: './circular-chart.component.html',
  styleUrls: ['./circular-chart.component.scss']
})
export class CircularChartComponent implements OnInit, AfterViewInit {


    myChart: any;

    constructor() {

    }


    ngOnInit() {
        echarts.use(
            [TitleComponent, TooltipComponent, GridComponent, GaugeChart, CanvasRenderer]
        );
    }

 ngAfterViewInit() {

     const chartDom = document.getElementById('circular-chart');
     if (chartDom) {
         this.myChart = echarts.init(chartDom);
     }

     const option = {
         series: [{
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
             data: [{
                 value: 70
             }]
         }]
     };

     this.myChart.setOption(option);
 }

}
