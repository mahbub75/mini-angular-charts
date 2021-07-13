import {Directive, OnInit, AfterViewInit, ElementRef, Renderer2} from "@angular/core";

declare const echarts: any;

@Directive()
export abstract class ChartBase implements OnInit, AfterViewInit {
    grid:any = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };
    xAxis: any= {
        data: [],
        type: 'value'
    };
    yAxis: any= {
        data: [],
        type: 'category'
    };
    series:any | any | any=[];
    options: {
        grid: any,
        xAxis: any,
        yAxis: any,
        series: any
    };
    chart: any;

    protected constructor(protected el: ElementRef, protected renderer2: Renderer2) {
    }

    ngOnInit() {
        // set some style to chart
        const elDom = this.el.nativeElement;
        this.renderer2.setStyle(elDom, "width","100%");
        this.renderer2.setStyle(elDom, "height","100%");
        this.renderer2.setStyle(elDom, "display","block");

        // initialize echart components
        this._initializeOptions();

    }

    ngAfterViewInit(): void {

        this.setOptions(this.options);
        setTimeout(() => {
            this.chart = echarts.init(this.el.nativeElement);
            this._renderChart();
        }, 0)
    }

    private _initializeOptions() {
        this.options = {
            grid: this.grid,
            xAxis: this.xAxis,
            yAxis: this.yAxis,
            series: this.series
        }
    }

    private _renderChart() {
        this.chart.setOption(this.options);
    }

    protected abstract setOptions(options);
}
