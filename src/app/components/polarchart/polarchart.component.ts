import { Component, OnInit } from '@angular/core';
import { productSalesMulti } from '../../data/products'

@Component({
  selector: 'app-polarchart',
  templateUrl: './polarchart.component.html',
  styleUrls: ['./polarchart.component.css']
})
export class PolarchartComponent implements OnInit {

  productSalesMulti: any[];
  constructor() {Object.assign(this, { productSalesMulti }); }

  ngOnInit(): void {
  }

  view: [number, number] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Products';
  yAxisLabel: string = 'Sales';

  colorScheme : any= {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

}
