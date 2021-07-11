import {Component, ElementRef, OnInit} from '@angular/core';
import {ChartBarBaseDirective} from "../../base/chart-bar-base.directive";
import {ChartAreaBaseDirective} from "../../base/chart-area-base.directive";

@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.scss']
})
export class ChartAreaComponent extends ChartAreaBaseDirective  {

    constructor(protected el: ElementRef) {
        super(el);
    }

}
