import {Component, Input, OnInit} from '@angular/core';
import {BarItem} from "../../models/bar-item";

@Component({
    selector: 'app-tile-bar',
    templateUrl: './tile-bar.component.html',
    styleUrls: ['./tile-bar.component.scss']
})
export class TileBarComponent implements OnInit {
    @Input() double: boolean = false;
    data: BarItem[] = [
        {value: 5, color: 'red', label: 'q1'},
        {value: 20, color: 'green', label: 'q2'},
        { value: 36,  color: 'blue', label: 'q3' },
        { value: 10,  color: 'yellow', label: 'q4' }
    ];

    constructor() {
    }

    ngOnInit()
        :
        void {
    }

}
