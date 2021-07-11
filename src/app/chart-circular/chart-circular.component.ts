import {Component, ElementRef} from '@angular/core';
import {ChartCircularBaseDirective} from "../base/chart-circular-base.directive";

@Component({
  selector: 'app-chart-circular',
  templateUrl: './chart-circular.component.html',
  styleUrls: ['./chart-circular.component.scss']
})
export class ChartCircularComponent extends ChartCircularBaseDirective{

    constructor(protected el: ElementRef) {
        super(el);
    }
}
