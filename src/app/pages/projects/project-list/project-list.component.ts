import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { DataService } from '../../../shared/services/';

import { pageTransition } from '../../../shared/animations/router.animations';
import { IProjects } from '../../../shared/interfaces';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  animations: [pageTransition().fadeInAndOut()]
})
export class ProjectListComponent implements OnInit {

  projects: IProjects[] = [];
  
  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    console.log('ON INIT');
    // Because Angular is crazy, after routing from a small scroll in projects.component.ts to this long scroll project-list.component it goes to the center
    window.scrollTo(0, 0);
    this.getProjects();
  }

  getProjects() {
    this.projects = this.dataService.getProjects();
    // REMOVE THE FOUR FEATURED PROJECTTS
    this.projects = this.projects.slice(4);
  }

  viewProject(id: string) {
    this.router.navigate(['/project', id]);
  }

  viewDemo(url: string) {
    window.open(url, '_blank');
  }

}
