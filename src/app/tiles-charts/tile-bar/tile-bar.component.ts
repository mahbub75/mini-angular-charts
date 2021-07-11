import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tile-bar',
  templateUrl: './tile-bar.component.html',
  styleUrls: ['./tile-bar.component.scss']
})
export class TileBarComponent implements OnInit {
    @Input() double: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
