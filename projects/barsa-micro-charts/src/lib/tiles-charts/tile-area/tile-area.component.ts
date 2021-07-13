import {Component, Input, OnInit} from '@angular/core';
import {LineItem} from "../../models/line-item";
import {AreaItem} from "../../models/area-item";

@Component({
    selector: 'app-tile-area',
    templateUrl: './tile-area.component.html',
    styleUrls: ['./tile-area.component.scss']
})
export class TileAreaComponent implements OnInit {
    @Input() double: boolean = false;

    areas: AreaItem[] = [{data: [2.5, 2.5, 2.5, 2.5], color: '#71c989'}, {
        data: [2, 2, 2, 2],
        color: '#f5b04d'
    }, {data: [1.5, 1.5, 1.5, 1.5], color: '#f66364'}];

    line: LineItem = {
        data: [{value: 2, label: 'june 1'}, {value: 4, label: 'june 20',}, {
            value: 3,
            label: 'june 27'
        }, {value: 5, label: 'june 30'}]
    };

    leftLabelsColor = '#71c989';
    rightLabelsColor = '#f66364';

    constructor() {
    }

    ngOnInit(): void {
    }

}
