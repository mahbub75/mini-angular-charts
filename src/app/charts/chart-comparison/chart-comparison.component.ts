import {Component, ElementRef} from '@angular/core';
import {ChartComparisonBaseDirective} from "../../base/chart-comparison-base.directive";

@Component({
  selector: 'app-chart-comparison',
  templateUrl: './chart-comparison.component.html',
  styleUrls: ['./chart-comparison.component.scss']
})
export class ChartComparisonComponent  extends ChartComparisonBaseDirective  {

    constructor(protected el: ElementRef) {
        super(el);
    }


}
