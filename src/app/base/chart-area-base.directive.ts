import {Directive, Input} from '@angular/core';
import {ChartBase} from "./chart-base";
import {AreaItem} from "../models/area-item";
import {LineItem} from "../models/line-item";
import {YAXisOption} from "echarts/types/dist/shared";

@Directive()
export class ChartAreaBaseDirective extends ChartBase {
    @Input() xAxisLabel: string[];
    @Input() areas: AreaItem[];
    @Input() line: LineItem;

    protected setOptions(options) {
        this.xAxis.type='category';
        this.xAxisLabel.forEach(value => {
            this.xAxis.data.push(value);
        });
        this.xAxis.max = null;
        this.xAxis.boundaryGap = false;
        this.yAxis.splitLine={show:false};
        this.yAxis.type="value";
        this.yAxis.splitNumber = 3;
        this.yAxis.min = 0;
        this.yAxis.max = 6;
        // handel area
        this.areas.forEach((area) => {
            const seriesItem = this._createItem(area.color, area.data.map(c => ({
                value: c,
                symbol: 'none'
            })));
            this.series.push(seriesItem);
        });
        // handel line
        const seriesItem = this._createSeriesItem(this.line.data.map(c => ({
            value: c,
            symbol: 'none'
        })));
        this.series.push(seriesItem);
    }

    private _createSeriesItem(data) {
        return {
            type: 'line',
            data,
            lineStyle:{width:1},
            color:this.line?.color || 'black',
            label: {
                show: false,
            }
        }
    }

    private _createItem(color: string, data: {
        value: number,
        symbol: string
    }[], name: string = 'none', stack: string = 'none') {
        return {
            name,
            type: 'line',
            stack,
            areaStyle: {
                color,
            },
            itemStyle: {
                color
            },
            emphasis: {
                focus: 'series'
            },
            data
        }
    }

}
