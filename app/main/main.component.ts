import { Component, OnInit } from '@angular/core';

import plants from 'D:/HTML/Angular/Plants/src/app/main/plantsList.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() {}
  plantList:{ id: BigInteger, name: String, sunlight: String, humidity: String, watering: String, cost: BigInt, description: String }[]=plants;
  ngOnInit(): void {
    console.log(plants);
  }
}