import {Component, ElementRef, OnInit} from '@angular/core';
import {ChartLineBaseDirective} from "../base/chart-line-base.directive";

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent extends ChartLineBaseDirective  {

    constructor(protected el: ElementRef) {
        super(el);
    }

}
