import { Component, OnInit } from '@angular/core';

import plants from 'D:/HTML/Angular/Plants/src/app/main/plantsList.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor() {}
  plantList:{ id: BigInteger, name: String, sunlight: String, humidity: String, watering: String, cost: BigInt, description: String }[]=plants;
  ngOnInit(): void {
    console.log(plants);
  }

}
