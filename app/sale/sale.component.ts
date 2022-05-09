import { Component, OnInit } from '@angular/core';

import plants from 'D:/HTML/Angular/Plants/src/app/main/plantsList.json';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  constructor() {}
  plantList:{ id: BigInteger, name: String, sunlight: String, humidity: String, watering: String, cost: BigInt, description: String, oldCost: BigInt }[]=plants;
  ngOnInit(): void {
    console.log(plants);
  }

}
