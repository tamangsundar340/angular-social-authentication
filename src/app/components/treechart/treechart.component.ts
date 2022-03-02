import { Component, OnInit } from '@angular/core';
import { productSales } from '../../data/products';

@Component({
  selector: 'app-treechart',
  templateUrl: './treechart.component.html',
  styleUrls: ['./treechart.component.css']
})
export class TreechartComponent implements OnInit {

  productSales: any[];

  constructor() {
    Object.assign(this, { productSales });
  }


  view: [number, number] = [700, 400];

  // options
  gradient: boolean = false;
  animations: boolean = true;

  legendPosition: any = 'below';

  colorScheme : any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };



  ngOnInit(): void {
  }

}
