import {Component, Input} from '@angular/core';
import {LineItem} from "../../models/line-item";

@Component({
    selector: 'app-tile-line-chart',
    templateUrl: './tile-line.component.html',
    styleUrls: ['./tile-line.component.scss']
})
export class TileLineComponent {

    @Input() double: boolean = false;

    line: LineItem = {
        data: [{value: 2, label: 'june 1'}, {value: 4, label: 'june 20',}, {
            value: 3,
            label: 'june 27'
        }, {value: 5, label: 'june 30'}], color: ''
    };

}
