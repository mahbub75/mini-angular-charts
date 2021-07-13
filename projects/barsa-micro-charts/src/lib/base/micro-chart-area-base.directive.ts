import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {MicroChartBase} from "./micro-chart-base.directive";
import {AreaItem} from "../models/area-item";
import {LineItem} from "../models/line-item";

@Directive(
    {
        selector: '[micro-chart-area]'
    }
)
export class MicroChartAreaBaseDirective extends MicroChartBase {
    @Input() areas: AreaItem[];
    @Input() line: LineItem;

    constructor(protected  el:ElementRef, protected renderer2: Renderer2) {
        super(el, renderer2);
    }

    protected setOptions(options) {
        this._scaleDownLineData();
        // set custom xAxis
        this.xAxis.type='category';
        this.line.data.forEach((item)=>{
            this.xAxis.data.push(item.label);
        })
        this.xAxis.max = null;
        this.xAxis.boundaryGap = false;

        // set custom yAxis
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
        const seriesItem = this._createSeriesItem(this.line.data.map(item => ({
            value: item.value,
            symbol: 'none'
        })));
        this.series.push(seriesItem);
    }

    private _scaleDownLineData() {
        const maxValue = Math.max.apply(Math, this.line.data.map((dataItem) => dataItem.value));
        return this.line.data.forEach((dataItem) =>{
            dataItem.value *= (6/maxValue);
        })

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
