import {Directive, Input} from '@angular/core';
import {ChartBase} from "./chart-base";
import {BarItem} from "../models/bar-item";
import {SeriesDataType} from "echarts/types/src/util/types";
import {BarSeriesOption} from "echarts";
import BarSeriesModel, {BarDataItemOption} from "echarts/types/src/chart/bar/BarSeries";

@Directive()
export class ChartBarBaseDirective extends ChartBase {

    @Input() data: BarItem[];


    protected setOptions(options) {
        this._initSeries(options);
        // set custom grid
        this.grid.bottom = 20;

        // set custom xAxis
        this.xAxis.type = 'category';
        this.xAxis.max = null;
        this.xAxis.axisLabel.show = true
        this.data.forEach(dataItem => {
            this.xAxis.data.push(dataItem.label);
            let dataSeriesItem = {value: dataItem.value, itemStyle: {color: dataItem.color}};
            options.series[0].data.push(dataSeriesItem);
        });

        // set custom yAxis
        this.yAxis.type = "value";

    }
   private _initSeries(options){
        options.series = [{
            type: 'bar',
            data: [],

        }]
    }

}
