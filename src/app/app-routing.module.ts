import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectListComponent } from './pages/projects/project-list/project-list.component';
import { ProjectDetailComponent } from './pages/projects/project-detail/project-detail.component';

export const appRoutingComponents = [ 
  ProjectsComponent, 
  SkillsComponent, 
  AboutComponent, 
  ProjectListComponent, 
  ProjectDetailComponent 
];

export const routes: Routes = [
  // MAIN NAVIGATION - These are the header components
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  // INSIDE OF PROJECTS(Component) FOLDER
  { path: 'projects',  component: ProjectListComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  // ** is anything that isnt found in the routes will go to ProjectsComponent (START VIEW)
  { path: '**', component: ProjectsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}