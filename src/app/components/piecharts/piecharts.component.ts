import { Component, OnInit } from '@angular/core';
import { productSales, productSalesMulti } from '../../data/products';

@Component({
  selector: 'app-piecharts',
  templateUrl: './piecharts.component.html',
  styleUrls: ['./piecharts.component.css']
})
export class PiechartsComponent implements OnInit {

  productSales: any[];
  constructor() {Object.assign(this, { productSales });  }

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


  isDoughnut: boolean = true;


  colorScheme : any = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

}
