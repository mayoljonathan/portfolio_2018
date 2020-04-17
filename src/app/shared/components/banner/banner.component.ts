import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  url: string = 'https://mayoljonathan.github.io'

  constructor() { }

  ngOnInit() {
  }

}
