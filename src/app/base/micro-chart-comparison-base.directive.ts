import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {MicroChartBase} from "./micro-chart-base.directive";
import {ComparisonItem} from "../models/comparison-item";
import {TextCommonOption} from "echarts/types/src/util/types";
import {YAXisOption} from "echarts/types/dist/shared";

@Directive({
    selector: '[micro-chart-comparison]'
})
export class MicroChartComparisonBaseDirective extends MicroChartBase {
    @Input() double: boolean = false;
    @Input() chartData: ComparisonItem;
    yAxis: YAXisOption;
    constructor(protected  el:ElementRef, protected renderer2: Renderer2) {
        super(el, renderer2);
    }
    protected setOptions(options: any) {
        // initialize series
        this._initValues(options);

        // set custom xAxis
        this.xAxis.type = "value";
        this.xAxis.boundaryGap = ['0%', '50%'];

        // set custom yAxis
        this.yAxis.type = "category";
        this.yAxis.offset = 10;
        this.yAxis.axisLabel = {
            show: true,
            inside: true,
            lineHeight: 16,
        };

        // set custom grid
        this.grid.top = 10;
        this.grid.left = 20;



        const textStyle: TextCommonOption = {
            verticalAlign: 'bottom',
            fontSize: 12,
            fontWeight: 'bold'
        };

        this.chartData.data.forEach((item) => {
            const seriesData = {
                value: item.value,
                itemStyle: {
                    color: item.color
                },
                label: {
                    position: ['95', '0%']
                }

            }

            options.series[0].data.push(seriesData);
            const yAxisData = {value: item.label, textStyle: textStyle};
            this.yAxis.data.push(yAxisData);
        });

        // if we have double tile
        if(this.double){
            this.yAxis.offset = 0;
            this.grid.left = 50;
            this.yAxis.axisLabel.inside = false;
            this.yAxis.axisLabel.lineHeight = null;
            options.series[0].label.position = 'right';
            this.yAxis.offset = 0;
            options.series[0].showBackground = false;
            this.xAxis.max = 112;
            options.series[0].data.map((dataItem)=>{
                delete dataItem.label.offset;
                dataItem.label.position = ['250', '0%'];
            });
        }
        options.series[0].label.formatter = (d) => {
            return d.data.value + this.chartData.suffix;
        };
    }


    private _initValues(options) {
        options.series = [{
            showBackground: true,
            barWidth: 3,
            type: 'bar',
            data: [],
            label: {
                show: true,
                position: 'top',
                distance: 0,
                valueAnimation: true,
                fontFamily: 'monospace',
                formatter: (d) => {
                    return d.data.value + '%';
                },
                lineHeight: -10
            },
        }];

        options.plotOptions = {
            bar: {
                horizontal: true,
                distributed: true,
            }

        };
    }
}
