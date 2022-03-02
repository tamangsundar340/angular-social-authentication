import { Component, OnInit } from '@angular/core';
import { productSales } from '../../data/products'

@Component({
  selector: 'app-numbercard',
  templateUrl: './numbercard.component.html',
  styleUrls: ['./numbercard.component.css']
})
export class NumbercardComponent implements OnInit {

  productSales: any[];
  constructor() {Object.assign(this, { productSales }); }

  ngOnInit(): void {
  }

 
  view: [number, number] = [700, 400];

  colorScheme : any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#deaff0';

}
