import { Component, OnInit } from '@angular/core';
import { bubbleData, productSalesMulti } from '../../data/products';

@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.css']
})
export class BubblechartComponent implements OnInit {

  bubbleData: any[];
  constructor() {  Object.assign(this, { bubbleData });}

  ngOnInit(): void {
  }

  view: [number,number] = [700, 370];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;

  showLegend: boolean = true;
  
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Sales';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Months';
  maxRadius: number = 20;
  minRadius: number = 5;
  yScaleMin: number = 70;
  yScaleMax: number = 85;

  legendPosition: any = 'below';

  colorScheme : any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

}
