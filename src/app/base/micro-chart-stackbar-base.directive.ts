import {Directive, ElementRef, Input, Renderer2} from "@angular/core";
import {MicroChartBase} from "./micro-chart-base.directive";
import {StackbarItem} from "../models/stackbar-item";


@Directive(
    {
        selector: '[micro-chart-stackbar]'
    }
)
export class MicroChartStackbarBase extends MicroChartBase{
    @Input() chartData: StackbarItem;

    constructor(protected  el:ElementRef, protected renderer2: Renderer2) {
        super(el, renderer2);
    }
    protected setOptions(options) {
        this.chartData.data.forEach((dataItem)=>{
            const dataConfig = this.creatData(dataItem);
           options.series.push(dataConfig)
        })
    }

    private creatData(dataItem) {

        return {
            name: 'Direct',
            barWidth: 15,
            type: 'bar',
            stack: 'total',
            emphasis: {
                focus: 'series'
            },
            data: [{
                value: dataItem.value,
                itemStyle: {
                    color: dataItem.color
                },
            }],

            label: {
                show: true,
                formatter: (d) => {
                    return d.data.value.toString() + this.chartData.suffix;
                },
                fontSize: 10
            },
        };
    }
}
