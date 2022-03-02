import { Component, OnInit } from '@angular/core';
// import {productSales, productSalesMulti} from 'src/assets/data/data';
import { productSales, productSalesMulti } from '../../data/products';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  productSales: any[];
  productSalesMulti: any[];

  // for height of bar graph
  view:[number, number] = [700, 370];
  // view: any[] = [700, 370];
  

  // for color of bar graph
  colorScheme : any = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };
  schemeType: any = 'ordinal'; // 'ordinal' or 'linear'  

  // x and y label settings of graph
  xAxis: boolean = true;
  yAxis: boolean = true;
  yAxisLabel: string = 'Sales';
  xAxisLabel: string = 'Products';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  // bar graph legends
  legend: boolean = true;
  legendTitle: string = 'Products';
  legendTitleMulti: string = 'Months';
  legendPosition: any = 'below'; // ['right', 'below']

  // bar grpah animaitons
  animations: boolean = true; // animations on load

  // show and unshow grid
  showGridLines: boolean = true; // grid lines

  // bar graph padding (distance between the bar)
  barPadding: number = 10

  // border edger of bra graph
  roundEdges: boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.productSales = productSales
    this.productSalesMulti = productSalesMulti
    console.log(typeof(this.view))
  }

}
