import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input('noContainer') noContainer: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
