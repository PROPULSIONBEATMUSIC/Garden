import { Component, OnInit } from '@angular/core';

import plants from 'D:/HTML/Angular/Plants/src/app/main/plantsList.json';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }
  plantList:{ id: BigInteger, name: String, sunlight: String, humidity: String, watering: String, cost: BigInt, description: String }[]=plants;

  ngOnInit(): void {
    console.log(plants);
  }

}
