import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { pageTransition } from '../../../shared/animations/router.animations';

import { IProjects } from '../../../shared/interfaces/index';
import { DataService, HelperService } from '../../../shared/services/index';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  animations: [pageTransition().fadeInAndOut()]
})
export class ProjectDetailComponent implements OnInit {

  project: IProjects;
  projectIsMobileApp: boolean = false;

  subscriber: Subscription;

  setProjectHeroBackground: any; // Create a global function so that I can remove the event listener for this function
  showProjectHeroImage: boolean = false; // The project hero image when viewed in mobile screen

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.getProject();
    this.resizeHero();
    window.scrollTo(0, 0);
  }

  getProject() {
    this.subscriber = this.route.params.subscribe(params => {
      this.project = this.dataService.getProject(params.id);
      console.log(this.project);
      if(this.project.platforms.find(p => p === 'android') === 'android') {
        this.projectIsMobileApp = true;
      }
    });
  };

  resizeHero(): any {
    this.setProjectHeroBackground = () => {
      if (document.body.clientWidth > 768) {
        this.showProjectHeroImage = false;
        if(this.helperService.isWebpSupported){
          return `url(${this.project.images.hero.high_webp})`;
        }
        return `url(${this.project.images.hero.high_jpg})`;
      }
      this.showProjectHeroImage = true;
    }
    window.addEventListener('resize', this.setProjectHeroBackground);
  }
  
  navigateToURL(url: string) {
    window.open(url, '_blank');
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.setProjectHeroBackground);
    this.subscriber.unsubscribe();
  }

}
