import { Injectable } from '@angular/core';

import { IProjects, ISkillSets } from '../interfaces';

@Injectable()
export class DataService {

  myProjects: IProjects[] = [];
  mySkillSet: ISkillSets[] = [];

  constructor() { 
    this.myProjects = [
      {
        id: 'showcaseit',
        title: 'ShowcaseIT',
        type: 'School Project (IT Capstone)',
        team: '2 (1 Developer, 1 Documentation Writer)',
        description: 'A place where users can showcase their apps, share source codes, and distribute their apps to other users.',
        platforms: ['Web'],
        technologies: ['TypeScript', 'HTML5', 'CSS3', 'Angular', 'Ionic', 'Firebase', 'Algolia'],
        reasonToCreate: `
        Google Play Store which is the 
        official distribution service for Android apps, are used by Android developers to 
        distribute their Android apps to users. Distributing apps in Google Play Store needs a 
        Google Play Developer account that requires a developer to have a credit/debit 
        card with $25 USD. However, there are still students who develops Android apps but does not have the requirements needed.
        To alleviate the problem, we created an alternative system similar to Google Play Store to give opportunity for them to showcase and distribute their apps to users.
        `,
        images: {
          hero: {
            high_jpg: './assets/images/projects/hero/showcaseit.jpg',
            high_webp: './assets/images/projects/hero/showcaseit.webp',
            // tiny_jpg: './assets/images/projects/hero/showcaseit_tiny.jpg',
            // tiny_webp: './assets/images/projects/hero/showcaseit_tiny.webp',
          },
          screenshots: [
            // {
            //   high_jpg: './assets/images/projects/screenshots/showcaseit/1_social_sign_in.jpg',
            //   high_webp: './assets/images/projects/screenshots/showcaseit/1_social_sign_in.webp',
            // },
            // {
            //   high_jpg: './assets/images/projects/screenshots/showcaseit/2_update_profile.jpg',
            //   high_webp: './assets/images/projects/screenshots/showcaseit/2_update_profile.webp',
            // },
            // {
            //   high_jpg: './assets/images/projects/screenshots/showcaseit/3_user_profile.jpg',
            //   high_webp: './assets/images/projects/screenshots/showcaseit/3_user_profile.webp',
            // },
            // {
            //   high_jpg: './assets/images/projects/screenshots/showcaseit/4_app_details.jpg',
            //   high_webp: './assets/images/projects/screenshots/showcaseit/4_app_details.webp',
            // },
            // {
            //   high_jpg: './assets/images/projects/screenshots/showcaseit/5_download_source.jpg',
            //   high_webp: './assets/images/projects/screenshots/showcaseit/5_download_source.webp',
            // },
            // {
            //   high_jpg: './assets/images/projects/screenshots/showcaseit/6_dev_apps.jpg',
            //   high_webp: './assets/images/projects/screenshots/showcaseit/6_dev_apps.webp',
            // },
            // {
            //   high_jpg: './assets/images/projects/screenshots/showcaseit/7_dev_app_details.jpg',
            //   high_webp: './assets/images/projects/screenshots/showcaseit/7_dev_app_details.webp',
            // },
            // {
            //   high_jpg: './assets/images/projects/screenshots/showcaseit/8_dev_app_distribution.jpg',
            //   high_webp: './assets/images/projects/screenshots/showcaseit/8_dev_app_distribution.webp',
            // },
            // {
            //   high_jpg: './assets/images/projects/screenshots/showcaseit/9_apk_details.jpg',
            //   high_webp: './assets/images/projects/screenshots/showcaseit/9_apk_details.webp',
            // },
            // {
            //   high_jpg: './assets/images/projects/screenshots/showcaseit/10_publish_and_review.jpg',
            //   high_webp: './assets/images/projects/screenshots/showcaseit/10_publish_and_review.webp',
            // }
          ]
        },
        siteURL: 'https://showcase-it.firebaseapp.com/',
        githubURL: 'https://github.com/mayoljonathan/ShowcaseIT/',
      },
      {
        id: 'aclc-group-portal',
        title: 'ACLC Group Portal',
        type: 'School Project (Software Engineering)',
        team: '3 (1 Developer, 2 Documentation Writers)',
        description: 'An app for collaboration with instructors and classmates in ACLC College of Mandaue.',
        platforms: ['Android'],
        technologies: ['TypeScript', 'Angular', 'NativeScript', 'XML', 'CSS', 'Firebase', 'SQLite'],
        reasonToCreate: `
        Students and instructors of ACLC College of Mandaue use social 
        media sites such as Facebook to connect to each other regarding of their specific 
        subjects. But sometimes, it makes a student distracted and can’t focused on their 
        school matters because they can see different posts, images and videos in their
        newsfeed. So we created an app like Facebook Groups to avoid distractions of using social media sites/apps.
        `,
        images: {
          hero: {
            high_jpg: './assets/images/projects/hero/aclc-group-portal.jpg',
            high_webp: './assets/images/projects/hero/aclc-group-portal.webp',
            // tiny_jpg: './assets/images/projects/hero/aclc-group-portal_tiny.jpg',
            // tiny_webp: './assets/images/projects/hero/aclc-group-portal_tiny.webp',
          },
          screenshots: []
        },
        siteURL: 'https://aclc-group-portal.firebaseapp.com/',
        appDownloadURL: 'https://firebasestorage.googleapis.com/v0/b/aclc-group-portal.appspot.com/o/app%2Fend-users%2Fv1.0.0%2FACLC%20Group%20Portal%20v1.0.0.apk?alt=media&token=e10ccdb4-1fe3-4690-8ec4-d115a4002a86',
      },
      {
        id: 'aclc-mobile-class-record',
        title: 'ACLC Mobile Class Record',
        type: 'School Project (System Analysis and Design)',
        team: '3 (1 Developer, 2 Documentation Writers)',
        description: 'A class record in a mobile app.',
        platforms: ['Android'],
        technologies: ['JavaScript', 'AngularJS', 'Ionic', 'HTML5', 'CSS3', 'PouchDB'],
        images: {
          hero: {
            high_jpg: './assets/images/projects/hero/aclc-mobile-class-record.jpg',
            high_webp: './assets/images/projects/hero/aclc-mobile-class-record.webp',
            // tiny_jpg: './assets/images/projects/hero/aclc-mobile-class-record_tiny.jpg',
            // tiny_webp: './assets/images/projects/hero/aclc-mobile-class-record_tiny.webp',
          },
          screenshots: []
        },
        githubURL: 'https://github.com/mayoljonathan/ACLC-Mobile-Class-Record/',
        appDownloadURL: 'https://firebasestorage.googleapis.com/v0/b/showcase-it.appspot.com/o/app%2Fdistributions%2F-KwUZwyb2dVJmeotTEm6%2Fcom.aclc.mobileclassrecord-ACLC%20Mobile%20Class%20Record-100002-1.0%20Beta.apk?alt=media&token=420a952c-a14e-435f-95ac-f41608eda25f',
      },
      {
        id: 'aclc-scheduling-system',
        title: 'ACLC Scheduling System',
        type: 'School Project (Database Management Systems 2)',
        team: '1 Developer',
        description: 'A scheduling system for ACLC College of Mandaue.',
        platforms: ['Web'],
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'PHP', 'JQuery', 'Bootstrap', 'MySQL'],
        images: {
          hero: {
            high_jpg: './assets/images/projects/hero/aclc-scheduling.jpg',
            high_webp: './assets/images/projects/hero/aclc-scheduling.webp',
            // tiny_jpg: './assets/images/projects/hero/aclc-scheduling_tiny.jpg',
            // tiny_webp: './assets/images/projects/hero/aclc-scheduling_tiny.webp',
          }
        },
        siteURL: 'http://mayoljonathan.000webhostapp.com/aclc_scheduling/'
      },
      {
        id: 'showcaseit-admin-panel',
        title: 'ShowcaseIT Admin Panel',
        type: 'School Project (IT Capstone)',
        team: '2 (1 Developer, 1 Documentation Writer)',
        description: 'An administrator panel for ShowcaseIT.',
        platforms: ['Web'],
        technologies: ['TypeScript', 'HTML5', 'CSS3', 'Angular', 'Ionic', 'Firebase', 'Algolia'],
        images: {
          hero: {
            high_jpg: './assets/images/projects/hero/showcaseit-admin.jpg',
            high_webp: './assets/images/projects/hero/showcaseit-admin.webp',
          }
        }
      },
      {
        id: 'aclc-group-portal-admin',
        title: 'ACLC Group Portal Admin',
        type: 'School Project (Software Engineering)',
        team: '3 (1 Developer, 2 Documentation Writer)',
        description: 'An administrator panel app for ACLC Group Portal.',
        technologies: ['TypeScript', 'Angular', 'NativeScript', 'XML', 'CSS', 'Firebase', 'SQLite'],
        platforms: ['Android'],
        images: {
          hero: {
            high_jpg: './assets/images/projects/hero/aclc-group-portal-admin.jpg',
            high_webp: './assets/images/projects/hero/aclc-group-portal-admin.webp',
          }
        }
      },
      {
        id: 'newsph',
        title: 'News PH',
        type: 'Side Project',
        team: '1 Developer',
        description: 'A simple website for getting daily news in the Philippines from different sources.',
        technologies: ['TypeScript', 'Angular', 'HTML5', 'CSS3'],
        platforms: ['Web'],
        images: {
          hero: {
            high_jpg: './assets/images/projects/hero/newsph.jpg',
            high_webp: './assets/images/projects/hero/newsph.webp',
          }
        },
        siteURL: 'https://mayoljonathan.github.io/NewsPH/',
        githubURL: 'https://github.com/NewsPH/'
      },
      {
        id: '101-loan',
        title: '101 Loan System',
        type: 'School Project',
        team: '1 Developer',
        description: 'A basic loan system.',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'Bootstrap'],
        platforms: ['Web'],
        images: {
          hero: {
            high_jpg: './assets/images/projects/hero/101-loan.jpg',
            high_webp: './assets/images/projects/hero/101-loan.webp',
          }
        },
        githubURL: 'https://github.com/mayoljonathan/101-Loan/'
      },
      {
        id: '101-sales-and-inventory',
        title: '101 Sales and Inventory System',
        type: 'School Project (Computer Programming 1)',
        team: '1 Developer',
        description: 'A sales and inventory system built in Java.',
        technologies: ['Java', 'MySQL'],
        platforms: ['Desktop'],
        images: {
          hero: {
            high_jpg: './assets/images/projects/hero/101-sales.jpg',
            high_webp: './assets/images/projects/hero/101-sales.webp',
          }
        },
      }
    ];

    this.mySkillSet = [
      { type: 'Languages' , tech: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'PHP', 'Java']},
      { type: 'Frameworks & Libraries' , tech: ['AngularJS', 'Angular', 'Ionic', 'NativeScript', 'Bootstrap', 'jQuery']},
      { type: 'Databases' , tech: ['MySQL', 'Firebase'] }
    ]
  }

  getProjects (limit?: number) {
    return limit ? this.myProjects.slice(0, limit) : this.myProjects;
  }

  getProject (id: string) {
    return this.myProjects.find(p => p.id === id);
  }

  getSkillSet () {
    return this.mySkillSet;
  }

}
