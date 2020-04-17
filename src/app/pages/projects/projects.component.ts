import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../shared/services/';

import { pageTransition } from '../../shared/animations/router.animations';
import { IProjects } from '../../shared/interfaces';

@Component({
  selector: 'home-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [pageTransition().fadeInAndOut()]
})
export class ProjectsComponent implements OnInit {

  projects: IProjects[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  // onLoaded(project_id: string){
  //   let element = document.getElementById(`project-image-${project_id}`);
  //   if(this.helperService.isTinyImage(element['src'])) {
  //     element.classList.add('image-loaded-tiny');
  //   }else{
  //     element.classList.add('image-loaded-high');
  //   }
  // }

  // setBlur(project_id: string) {
  //   let element = document.getElementById(`project-image-${project_id}`);
  //   if(element['src']){
  //     if (this.helperService.isImageCached(element['src'])){
  //       console.log('Image is cached for:'+ element['src']);
  //       // element.classList.remove('image-blur');
  //     } else {
  //       console.log('Image was not cached for:'+ element['src']);
  //     }
  //   }
  // }

  getProjects() {
    this.projects = this.dataService.getProjects(4);
  }

  viewProject(id: string) {
    this.router.navigate(['/project', id]);
  }

  viewMoreProjects() {
    this.router.navigate(['/projects']);
  }

}
