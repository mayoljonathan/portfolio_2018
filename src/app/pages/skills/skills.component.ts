import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../../shared/animations/router.animations';

import { DataService } from '../../shared/services/';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [pageTransition().fadeInAndOut()]
})
export class SkillsComponent implements OnInit {

  skillSet: Array<any>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getSkillSet();
  }

  getSkillSet() {
    this.skillSet = this.dataService.getSkillSet();
  }

}
