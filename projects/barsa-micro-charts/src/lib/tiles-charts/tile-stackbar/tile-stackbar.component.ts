import { Component, Input} from '@angular/core';
import {StackbarItem} from "../../models/stackbar-item";



@Component({
    selector: 'app-stack-bar',
    templateUrl: './tile-stackbar.component.html',
    styleUrls: ['./tile-stackbar.component.scss']
})
export class TileStackbarComponent {
    @Input() double: boolean ;

    chartData: StackbarItem = {data: [{value: 20, color: '#5899da'}, {value: 30, color: '#de890d'}, {value: 50, color: '#dc0d0e'}], suffix: '%'};

   }
