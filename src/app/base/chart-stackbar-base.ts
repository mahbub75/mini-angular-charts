import {Directive, ElementRef, Input} from "@angular/core";
import {ChartBase} from "./chart-base";


@Directive(

)
export abstract class ChartStackbarBase extends ChartBase{
    @Input() data: number[] = [];
    @Input() postFix: string = '%';


    protected setOptions(options) {

        this.data.forEach((value, index)=>{
            const dataConfig = this.creatData(value, index);
           options.series.push(dataConfig)
        })


    }
getColor (index: number): string{
        let color = '#5899da';
        switch (index) {
            case 0:
                color = '#5899da'
                break;

            case 1:
                color = '#de890d'
                break;
            case 2:
                color = '#dc0d0e'
                break;
        }
        return color;

}
    private creatData( value: number, index: number) {
        const color = this.getColor(index);
        return {
            name: 'Direct',
            barWidth: 15,
            type: 'bar',
            stack: 'total',
            emphasis: {
                focus: 'series'
            },
            data: [{
                value: value,
                itemStyle: {
                    color: color
                },
            }],

            label: {
                show: true,
                formatter: (d) => {
                    return d.data.value + this.postFix;
                },
                fontSize: 10
            },
        };
    }
}
