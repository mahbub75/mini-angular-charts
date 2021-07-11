import {Component, ElementRef, OnInit} from '@angular/core';
import {ChartStackbarBase} from "../base/chart-stackbar-base";
import {ChartBarBaseDirective} from "../base/chart-bar-base.directive";

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent extends ChartBarBaseDirective  {

    constructor(protected el: ElementRef) {
        super(el);
    }

}
