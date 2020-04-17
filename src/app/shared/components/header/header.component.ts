import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('menuOverlayState', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('.3s', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('.3s', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  @ViewChild('navMenu') navMenu: ElementRef;
  @ViewChild('iconMenuContainer') iconMenuContainer: ElementRef;
  @ViewChild('iconMenu') iconMenu: ElementRef;

  showMenuInOverlay:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    this.showMenuInOverlay = !this.showMenuInOverlay;
    if(this.iconMenu.nativeElement.classList.contains('open')) {
      // HIDING MENU NAV
      this.iconMenu.nativeElement.classList.remove('open');
    }else{
      // OPENNING MENU NAV
      this.iconMenu.nativeElement.classList.add('open');
    }
  }

}
