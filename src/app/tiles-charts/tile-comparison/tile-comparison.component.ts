import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tile-comparison',
    templateUrl: './tile-comparison.component.html',
    styleUrls: ['./tile-comparison.component.scss']
})
export class TileComparisonComponent implements OnInit {
    @Input() double: boolean = false;

    data = [{value: 5, color: 'red', label: 'تاخیر'}, {value: 45, color: 'red', label: 'هم اکنون'}, {value: 100, color: 'red', label: 'به موقع'}];

    constructor() {
    }

    ngOnInit(): void {
    }

}
