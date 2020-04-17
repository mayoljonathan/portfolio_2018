import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() contentType: string;
  
  constructor() { }

  ngOnInit() {
  }

  getHeroSectionClass () {
    if (this.contentType === 'greetings') {
      return 'hero';
    } else {
      return 'hero-small';
    }
  }
}
