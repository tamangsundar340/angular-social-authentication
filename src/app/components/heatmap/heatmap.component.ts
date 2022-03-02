import { Component, OnInit } from '@angular/core';
import { productSalesMulti } from '../../data/products';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {

  constructor() {Object.assign(this, { productSalesMulti }); }

  ngOnInit(): void {
  }

  productSalesMulti: any[];
  view: [number, number]= [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'product';
  yAxisLabel: string = 'sales';

  colorScheme : any = {
    domain: ['#fc88ab', '#fc6d98', '#ff477f', '#ff3371', '#ff2165', '#ff004e']
  };

}
