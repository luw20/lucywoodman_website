import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent }  from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
     {path: 'home', component: HomeComponent},
     {path: 'projects', component: ProjectsComponent},
     {path: 'contact', component: ContactComponent},
     {path: 'experience', component: ExperienceComponent},
     { path: '', redirectTo: '/home', pathMatch: 'full' }
  ]}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
