import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  plants: string[]= ["First", "Second", "Third"]
  constructor() { }

  ngOnInit(): void {
  }

}