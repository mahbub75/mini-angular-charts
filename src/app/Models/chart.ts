import {BarSeriesOption, ComposeOption, GaugeSeriesOption, GridComponentOption, LineSeriesOption, TitleComponentOption} from 'echarts';


export interface Chart {
    domId: string;
    options: ComposeOption<BarSeriesOption | LineSeriesOption | TitleComponentOption | GridComponentOption>;
}
