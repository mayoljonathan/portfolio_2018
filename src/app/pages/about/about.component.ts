import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { pageTransition } from '../../shared/animations/router.animations';
import { HelperService } from '../../shared/services/index';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [pageTransition().fadeInAndOut()]
})
export class AboutComponent implements OnInit {

  @ViewChild('aboutHeroContainer') aboutHeroContainer: ElementRef;
  @ViewChild('aboutHeroBackground') aboutHeroBackground: ElementRef; 

  setHeroHeight: any; // Create a global function so that I can remove the event listener for this function
  aboutContent: string;

  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.setHeroBackgroundImage();
    this.resizeHero();
    this.aboutContent = `
      <p>Hello, I'm Jonathan Jay Mayol. I'm a fresh graduate with a Bachelor's degree in Information Technology in ACLC College of Mandaue and currently looking for a Web Developer job in IT industry where I can utilize my skills and enhance it as well.
      I love to code because it is my passion and I can make my ideas turn to reality with the help of technology and it is possible because I am willing to learn new things and find ways to solve problems.
      <a href="./assets/files/resume(Mayol).pdf" target="_blank" rel="noreferrer noopener" class="underline">Download my resume</a>.
      </p>
      
      <p>You can reach out by my email - <a class="underline" href="mailto:mayoljonathan@gmail.com">mayoljonathan@gmail.com</a></p>
    `;
  }

  setHeroBackgroundImage() {
    if (this.helperService.isWebpSupported) {
      return this.aboutHeroBackground.nativeElement.style.backgroundImage = `url('./assets/images/about/about.webp')`;
    }
    this.aboutHeroBackground.nativeElement.style.backgroundImage = `url('./assets/images/about/about.jpg')`;
  }

  resizeHero():void {
    let aboutHeroContainer = this.aboutHeroContainer.nativeElement;
    let aboutHeroBackground = this.aboutHeroBackground.nativeElement;

    this.setHeroHeight = () => {
      const offset = document.body.clientWidth > 480 ? 12 : 36;
      if(document.body.clientWidth > 768) {
        aboutHeroContainer.style.height = '524px';
        aboutHeroBackground.style.height = '500px';
      }else {
        aboutHeroContainer.style.height = `${(aboutHeroContainer.clientWidth - aboutHeroContainer.clientWidth/2) + offset}px`;
        // Temporary
        aboutHeroBackground.style.height = `${(aboutHeroBackground.clientWidth - aboutHeroBackground.clientWidth/2)}px`;
        
        // const bgWidth = aboutHeroBackground.clientWidth;
        // console.log(bgWidth);
        // // if(bgWidth > 194) {
        //   aboutHeroBackground.style.height = `${(aboutHeroBackground.clientWidth - aboutHeroBackground.clientWidth/2 - 11)}px`;
        // // }
      }
    }

    this.setHeroHeight();
    window.addEventListener('resize', this.setHeroHeight);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.setHeroHeight);
  }

}
