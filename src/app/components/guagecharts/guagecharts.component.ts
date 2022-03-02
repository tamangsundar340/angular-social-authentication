import { Component, OnInit } from '@angular/core';
import { productSales } from '../../data/products'

@Component({
  selector: 'app-guagecharts',
  templateUrl: './guagecharts.component.html',
  styleUrls: ['./guagecharts.component.css']
})
export class GuagechartsComponent implements OnInit {


  constructor() {
    Object.assign(this, { productSales });
  }

  ngOnInit(): void {
  }

  productSales: any[];
  view: [number, number] = [500, 400];
  legend: boolean = true;
  legendPosition: any = 'below';

  colorScheme : any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

}
