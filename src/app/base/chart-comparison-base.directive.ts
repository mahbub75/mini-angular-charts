import {Directive, Input} from '@angular/core';
import {ChartBase} from "./chart-base";
import {ComparisonItem} from "../models/comparison-item";
import {CartesianAxisOption} from "echarts/types/src/coord/cartesian/AxisModel";
import {TextCommonOption} from "echarts/types/src/util/types";
import {YAXisOption} from "echarts/types/dist/shared";

@Directive()
export class ChartComparisonBaseDirective extends ChartBase {

    @Input() postFix: string = '%'
    @Input() data: ComparisonItem[]
    yAxis:YAXisOption;



    series = [{
        showBackground: true,
        barWidth: 3,
        type: 'bar',

        data: [],
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

    }];
    private _initSeries(){

    }

    protected setOptions(options: any) {
        this.xAxis.type="category";
        this.xAxis.boundaryGap = ['0%', '50%'];
        this.yAxis.type="value";
        this.yAxis.offset = 10;
        this.yAxis.axisTick = {show: false};
        this.yAxis.axisLabel = {
            show: true,
            inside: true,
            lineHeight: 16,
        };
        this.grid.top = 10;
        this.grid.left = 20;
        options.plotOptions = {
            bar: {
                horizontal: true,
                distributed: true,
            }

        };
        const textStyle:TextCommonOption = {
            verticalAlign: 'bottom',
            fontSize: 12,
             // distance: 100,
            fontWeight: 'bold'
        };
        this.data.forEach((item) => {
            const seriesData = {
                value: item.value,
                itemStyle: {
                    color: item.color
                },
                label: {
                    offset: [this.dataOffset(item.value), 0]
                }

            }
            this.series[0].data.push(seriesData);
            const yAxisData = {value: item.label, textStyle: textStyle};
            this.yAxis.data.push(yAxisData);
        });
        this.series[0].label.formatter = (d) => {
            return d.data.value + this.postFix;
        };
    }


    dataOffset(data: number) {
        let offset: number = 0;
        switch (data) {
            case 5:
                offset = 114;
                break
            case 45:
                offset = 84;
                break
            case 100:
                offset = 14
        }
        return offset

    }
}
