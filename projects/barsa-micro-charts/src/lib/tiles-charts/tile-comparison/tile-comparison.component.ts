import {Component, Input} from '@angular/core';
import {ComparisonItem} from "../../models/comparison-item";

@Component({
    selector: 'app-tile-comparison',
    templateUrl: './tile-comparison.component.html',
    styleUrls: ['./tile-comparison.component.scss']
})
export class TileComparisonComponent {
    @Input() double: boolean = false;

    chartData: ComparisonItem = {data: [{value: 5, color: '#de890d', label: 'تاخیر'}, {value: 45, color: '#dc0d0e', label: 'هم اکنون'}, {value: 100, color: '#3fa45b', label: 'به موقع'}], suffix: '%'}
}
