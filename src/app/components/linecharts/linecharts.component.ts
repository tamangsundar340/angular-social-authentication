import { Component, OnInit } from '@angular/core';
import { productSales, productSalesMulti } from '../../data/products';

@Component({
  selector: 'app-linecharts',
  templateUrl: './linecharts.component.html',
  styleUrls: ['./linecharts.component.css']
})
export class LinechartsComponent implements OnInit {

  productSalesMulti: any[];
  constructor() {Object.assign(this, { productSalesMulti }); }

  ngOnInit(): void {
  }

  view: [number,number] = [700, 370];

  // options
  legend: boolean = true;
  legendTitle: string = 'Products';
  legendTitleMulti: string = 'Months';
  legendPosition: any = 'below'; // ['right', 'below']


  showLabels: boolean = true;
  animations: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Products';
  yAxisLabel: string = 'Sales';
  timeline: boolean = true;

  colorScheme : any = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

}
