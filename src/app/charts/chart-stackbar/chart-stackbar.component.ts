import {Component, ElementRef} from '@angular/core';
import {ChartStackbarBase} from "../../base/chart-stackbar-base";

@Component({
    selector: 'app-chart-stackbar',
    templateUrl: './chart-stackbar.component.html',
    styleUrls: ['./chart-stackbar.component.scss']
})
export class ChartStackbarComponent  extends ChartStackbarBase  {

    constructor(protected el: ElementRef) {
        super(el);
    }

}
