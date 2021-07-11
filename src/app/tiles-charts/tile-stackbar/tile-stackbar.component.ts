import {
    Component, ElementRef, Input, ViewChild} from '@angular/core';



@Component({
    selector: 'app-stack-bar',
    templateUrl: './tile-stackbar.component.html',
    styleUrls: ['./tile-stackbar.component.scss']
})
export class TileStackbarComponent {
    @Input() double: boolean ;
    @ViewChild('chart', {static: false}) chart: ElementRef;

    postFix = '%' ;
    data =[20,30,50];

    constructor() {
    }
   }
